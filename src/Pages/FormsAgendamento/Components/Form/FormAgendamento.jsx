import React, { useEffect, useMemo, useState } from 'react'
import { FormAgendamentoSC } from './style'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacaoAgendamento } from '../../../../Validations/AgendamentoValidation'

import { formatar } from '../../../../Scripts/FormsAgendamento/Formatar'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import { FiltroHorariosDisponiveisModel } from '../../../../Models/FiltroHorariosDisponiveis.model'


import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { ListaServicoModel } from '../../../../Models/ListaServicoModel'
import { CardServicoModel } from '../../../../Models/CardServicoModel'
import FotoBarbeiro from '../../../../Components/FotoBarbeiro/FotoBarbeiro'
import { formatarHorario } from '../../../../Utils/functions'
import Oval from 'react-loading-icons/dist/esm/components/oval'

export default function FormAgendamento() {
    const { dadosTenantBarbearia, servicoSelecionado, setServicoSelecionado, setAgendamentoRealizado } = React.useContext(GlobalContext)

    let navigate = useNavigate()

    let dataMin = new Date()
    let dataMax = new Date()
    dataMax.setMonth((dataMin.getMonth() + 1))

    const [carregou, setCarregou] = useState(false)
    const [listaServicos, setListaServico] = useState(null)
    const [exibirCalendario, setExibirCalendario] = useState(true)
    const [idBarbeiroSelecionado, setIdBarbeiroSelecionado] = useState('0')
    const [horaSelecionada, setHoraSelecionada] = useState('')
    const [dataSelecionada, setDataSelecionada] = useState(new Date())
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
        setValue('barbeariasId', dadosTenantBarbearia.idBarbearia)
        setValue('horario', formatar.toDate(new Date())[0])
        setCarregou(true)
        setListaServico(new ListaServicoModel(dadosTenantBarbearia.servicos).servicos)
    }, [0])

    ///// ---------------------------------- /////
    const listarServicos = () => {
        return listaServicos.map(servico => {
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

        else {

            return horariosDisponiveis.listaHorarios.map(horario => {
                horario = formatarHorario(horario)

                return <li key={horario}>
                    <button
                        className={horaSelecionada === horario ? 'liSelecionado' : ''}
                        type='button'
                        onClick={() => {
                            setHoraSelecionada(horario)
                            setValue('horario', getValues('horario').substring(0, 10) + 'T' + horario + ':00')
                            clearErrors('horario')
                        }}>
                        {horario}
                    </button>
                </li>
            })
        }
    }

    ///// ---------------------------------- /////
    const handleServico = event => {
        setExibirCalendario(false) // Garantir que o calendário não seja renderizado após trocar de serviço
        setIdBarbeiroSelecionado('0') // Garantir que o barbeiro não fique selecionado após trocar de serviço
        setValue('barbeirosId', '0') // Garantir que os dados do formulário estejam atualizados, sem isso a validação não funciona corretamente

        if (event.target.value === '0')
            setServicoSelecionado(new CardServicoModel()) // Para resetar os dados do serviço selecionado caso volte para "Selecionar serviço"
        else {
            clearErrors('servicosId')
            setServicoSelecionado(listaServicos.find(servico => servico.id === event.target.value))
        }
    }

    const handleBarbeiro = event => {
        const objData = formatar.toDate(new Date())
        
        setValue('horario', objData[0])
        setDataSelecionada(new Date())
        setValue('barbeirosId', event.target.value)
        setIdBarbeiroSelecionado(event.target.value)
    }

    const handleData = event => {
        const objData = formatar.toDate(event)

        setDataSelecionada(event)
        setValue('horario', objData[0])
        getHorariosDisponiveis(objData)
    }

    ///// ---------------------------------- /////
    const addAgendamento = dadosAgendamento => {

        if (new Date(getValues('horario')) > new Date()) {

            setStatusAgendamento({ ...statusAgendamento, carregando: true })
            RequestsClientes.postAgendamento(dadosAgendamento)
                .then((res) => {
                    // console.log(res)
                    if (res !== false) {
                        setAgendamentoRealizado(true)
                        setStatusAgendamento({ ...statusAgendamento, carregando: false })
                        navigate('/confirmacao-agendamento')
                    }
                    else {
                        setStatusAgendamento({ erroAgendamento: true, carregando: false })
                        window.alert('Não foi possível realizar o agendamento, tente novamente!')
                        navigate(-1)
                    }
                })
                
        } else {
            window.alert("Agendamento não realizado, tente novamente!")
            navigate(-1)
        }
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
        setHoraSelecionada('') // Garantir que o botão não venha selecionado caso receba uma nola lista de horários

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
            value={dataSelecionada}
            defaultValue={new Date()}
        />
    }, [dataSelecionada])

    useEffect(() => {
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

            <FormAgendamentoSC>
                <h2>Preencha as informações</h2>
                <form onSubmit={handleSubmit(addAgendamento)}>
                    <select
                        name='servico'
                        {...register("servicosId")}
                        onChange={handleServico}
                        defaultValue={servicoSelecionado.id}
                    >
                        <option value="0" key='0'>Selecionar serviço</option>
                        {dadosTenantBarbearia.servicos && listarServicos()}
                    </select>
                    <p className="mensagem-erro">{errors.servicosId?.message}</p>

                    <input type="text" value={'Preço: ' + servicoSelecionado.preco + ',00 R$'} disabled></input>

                    <select
                        value={idBarbeiroSelecionado}
                        name='barbeiro'
                        {...register("barbeirosId")}
                        onChange={handleBarbeiro}
                        disabled={servicoSelecionado.preco === '00'}
                        className={idBarbeiroSelecionado !== '0' ? 'select-barbeiro' : ''}
                    >
                        <option value='0' key='0'>Selecionar barbeiro</option>
                        {servicoSelecionado.preco !== '00' && listarBarbeiros()}
                    </select>
                    <p className="mensagem-erro">{errors.barbeirosId?.message}</p>

                    {
                        idBarbeiroSelecionado !== '0' &&
                        <FotoBarbeiro
                            listaBarbeiros={servicoSelecionado.listaBarbeiros}
                            idBarbeiro={idBarbeiroSelecionado}
                        />
                    }

                    {
                        exibirCalendario && <>
                            <h3 >Escolha uma data:</h3>
                            <div className="WrapCalendario">
                                {calendarioMemo}
                            </div>
                        </>
                    }

                    {
                        exibirCalendario && <>
                            <h3 htmlFor="">Selecione um horário:</h3>
                            <ul className="WrapListaHorarios">
                                <div>
                                    {listarHorariosDisponiveis()}
                                </div>
                            </ul>
                            <p className="mensagem-erro">{errors.horario?.message}</p>
                        </>
                    }

                    <input type="text" name='name' placeholder='Nome completo' {...register('name')} maxLength={30} minLength={3}></input>
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
            </FormAgendamentoSC>

        </>
    )
}
