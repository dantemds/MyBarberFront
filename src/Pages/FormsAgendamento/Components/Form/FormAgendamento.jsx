import React, { useEffect, useMemo, useState } from 'react'
import ListarServicos, { ListarPrecoServico, ListarBarbeiros } from '../../../../Scripts/FormsAgendamento/Listar'

import { FormsAgendamento } from '../../../../Views/FormsAgendamento/style'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import ExibirFotoBarbeiro from '../../../../Scripts/FormsAgendamento/Exibir'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacaoAgendamento } from '../../../../Validations/AgendamentoValidation'

import { formatar } from '../../../../Scripts/FormsAgendamento/Formatar'
import { AgendamentoModel } from '../../../../Models/AgendamentoModel'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import { FiltroHorariosDisponiveisModel } from '../../../../Models/FiltroHorariosDisponiveis.model'

import { Oval } from 'react-loading-icons'

import Carregando from '../Carregando/Carregando'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { isExist } from '../../../../Utils/functions'
import { ListaServicoModel } from '../../../../Models/ListaServicoModel'
import { CardServicoModel } from '../../../../Models/CardServicoModel'


export default function FormAgendamento(props) {
    const { dadosTenantBarbearia, servicoSelecionado, setServicoSelecionado } = React.useContext(GlobalContext)

    let navigate = useNavigate()

    let dataMin = new Date()
    let dataMax = new Date()
    dataMax.setMonth((dataMin.getMonth() + 1))

    const [carregou, setCarregou] = useState(false)
    // const [listaServicos, setListaServico] = useState(null)
    const [listaServicos, setListaServico] = useState(null)
    const [exibirCalendario, setExibirCalendario] = useState(true)
    const [idBarbeiroSelecionado, setIdBarbeiroSelecionado] = useState('0')
    const [statusAgendamento, setStatusAgendamento] = useState({
        carregando: false,
        erroAgendamento: false
    })
    const [horariosDisponiveis, setHorariosDisponiveis] = useState({
        listaHorarios: [],
        carregando: false
    })

    const { register, handleSubmit, formState: { errors }, setValue, getValues, clearErrors } = useForm({
        resolver: yupResolver(validacaoAgendamento)
    })


    useEffect(() => {
        if (!dadosTenantBarbearia || localStorage.getItem('infoAgendamento')) {
            navigate(-1)
        }
        else {
            setValue('barbeariasId', dadosTenantBarbearia.idBarbearia)
            setCarregou(true)
            setListaServico(new ListaServicoModel(dadosTenantBarbearia.servicos).servicos)
        }
    }, [0])

    ///// ---------------------------------- /////
    const listarServicos = () => {
        return listaServicos.map(servico => {
            if (servicoSelecionado.id === servico.id)
                return <option key={servico.id} value={servico.id} selected >{servico.nome}</option>
            else
                return <option key={servico.id} value={servico.id}>{servico.nome}</option>
        })
    }

    const listarBarbeiros = () => {
        return servicoSelecionado.listaBarbeiros.map(barbeiro => {
            return <option
                key={`${barbeiro.barbeiros.idBarbeiro}${barbeiro.barbeiros.nameBarbeiro}`}
                value={barbeiro.barbeiros.idBarbeiro}>{barbeiro.barbeiros.nameBarbeiro}
            </option>
        })
    }

    const listarHorariosDisponiveis = () => {
        if (horariosDisponiveis.listaHorarios.length === 0 && horariosDisponiveis.carregando === false)
            return <div><p>Nenhum horário disponível.</p></div>

        else if (horariosDisponiveis.carregando === true)
            return <Oval stroke={dadosTenantBarbearia.temas.corPrimaria} speed={1} />

        else
            return horariosDisponiveis.listaHorarios.map(horario => {
                horario = horario.toString() + ':00'
                horario = horario.toString().replace('.5:00', ':30')

                if (horario.length === 4)
                    horario = '0' + horario

                return <li key={horario}><button type='button' onClick={() => {
                    setValue('horario', getValues('horario').substring(0, 10) + 'T' + horario + ':00')
                    clearErrors('horario')
                }}>{horario}</button></li>
            })
    }

    ///// ---------------------------------- /////
    const handleServico = event => {
        setExibirCalendario(false) // Garantir que o calendário não seja renderizado após trocar de serviço
        setIdBarbeiroSelecionado('0') // Garantir que o barbeiro não fique selecionado após trocar de serviço

        if (event.target.value === '0')
            setServicoSelecionado(new CardServicoModel()) // Para resetar os dados do serviço selecionado caso volte para "Selecionar serviço"
        else {
            clearErrors('servicosId')
            setServicoSelecionado(listaServicos.find(servico => servico.id === event.target.value))
        }
    }

    const handleBarbeiro = event => {
        setValue('barbeirosId', event.target.value)
        setIdBarbeiroSelecionado(event.target.value)
    }

    const handleData = event => {
        const objData = formatar.toDate(event)

        setValue('horario', objData[0])
        getHorariosDisponiveis(objData)
    }

    ///// ---------------------------------- /////
    const addAgendamento = dadosAgendamento => {
        console.log(dadosAgendamento)
        setStatusAgendamento({ ...statusAgendamento, carregando: true })
        RequestsClientes.postAgendamento(dadosAgendamento)
            .then(() => {
                setStatusAgendamento({ ...statusAgendamento, carregando: false })
                navigate('/confirmacao-agendamento')
            })
            .catch(()=> {
                setStatusAgendamento({ erroAgendamento: true, carregando: false })

            })
    }

    const getHorariosDisponiveis = (data) => {
        let filtroHorariosDisponiveis = new FiltroHorariosDisponiveisModel(
            dadosTenantBarbearia.idBarbearia,
            getValues('barbeirosId'),
            getValues('servicosId'),
            data[0],
            data[1]
        )

        setHorariosDisponiveis({ ...horariosDisponiveis, carregando: true })

        RequestsClientes.getHorariosDisponiveis(filtroHorariosDisponiveis)
            .then(resData => {
                setHorariosDisponiveis({
                    carregando: false,
                    listaHorarios: resData
                })
            })
    }

    ///// ---------------------------------- /////
    const calendarioMemo = useMemo(() => {
        return <Calendar
            className="Calendario"
            minDate={dataMin}
            maxDate={dataMax}
            onChange={handleData}
            defaultValue={new Date()}
        />
    }, [0])

    useEffect(() => {
        console.log(idBarbeiroSelecionado)
        if (idBarbeiroSelecionado == "0")
            setExibirCalendario(false)
        else {
            clearErrors('barbeirosId')
            setExibirCalendario(true)
            getHorariosDisponiveis(formatar.toDate(new Date()))
        }
    }, [idBarbeiroSelecionado])

    // console.log('Renderizou')

    return (
        carregou &&
        <>

            <FormsAgendamento>
                <h2>Preencha as informações</h2>
                <form onSubmit={handleSubmit(addAgendamento)}>
                    {/* <labell >Serviços:</labell> */}
                    <select
                        name='servico'
                        {...register("servicosId")}
                        onChange={handleServico}
                    >
                        <option value="0" key='0'>Selecionar serviço</option>
                        {dadosTenantBarbearia.servicos && listarServicos()}
                    </select>
                    <p className="mensagem-erro">{errors.servicosId?.message}</p>

                    <input type="text" value={'Preço: ' + servicoSelecionado.preco + ',00 R$'} disabled></input>

                    <select
                        name='barbeiro'
                        {...register("barbeirosId")}
                        onChange={handleBarbeiro}
                        disabled={servicoSelecionado.preco === '00'}
                    >
                        <option value='0' key='0'>Selecionar barbeiro</option>
                        {servicoSelecionado.preco !== '00' && listarBarbeiros()}
                    </select>
                    <p className="mensagem-erro">{errors.barbeirosId?.message}</p>

                    {
                        exibirCalendario && <>
                            <label >Escolha uma data:</label>
                            <div className="WrapCalendario">
                                {calendarioMemo}
                            </div>
                        </>
                    }

                    {
                        exibirCalendario && <>
                            <label htmlFor="">Selecione um horário:</label>
                            <ul className="WrapListaHorarios">
                                <div>
                                    {listarHorariosDisponiveis()}
                                </div>
                            </ul>
                            <p className="mensagem-erro">{errors.horario?.message}</p>
                        </>
                    }

                    <input type="text" name='name' placeholder='Nome completo' {...register('name')} maxLength={20} minLength={3}></input>
                    <p className="mensagem-erro">{errors.name?.message}</p>

                    <input type="email" name='email' placeholder='E-mail' {...register('email')} maxLength={30} minLength={3}></input>
                    <p className="mensagem-erro">{errors.email?.message}</p>

                    <input type="tel" name='contato' placeholder='Telefone' {...register('contato')} maxLength={11} minLength={3}></input>
                    <p className="mensagem-erro">{errors.contato?.message}</p>

                    <button
                        type='submit'
                        className={statusAgendamento.carregando || statusAgendamento.erroAgendamento ? 'Btn-disabled' : ''}
                        disabled={statusAgendamento.carregando || statusAgendamento.erroAgendamento}                    >
                        {statusAgendamento.carregando ? 'Carregando...' : 'Agendar'}
                    </button>
                </form>
            </FormsAgendamento>

        </>
    )
}
