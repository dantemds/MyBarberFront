import React, { useEffect, useMemo, useState } from 'react'
import ListarServicos, { ListarPrecoServico, ListarBarbeiros } from '../../Scripts/FormsAgendamento/Listar'

import { FormsAgendamento } from './style'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import ExibirFotoBarbeiro from '../../Scripts/FormsAgendamento/Exibir'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacaoAgendamento } from '../../Validations/AgendamentoValidation'

import { formatar } from '../../Scripts/FormsAgendamento/Formatar'
import { AgendamentoModel } from '../../Models/AgendamentoModel'
import { RequestsClientes } from '../../API/RequestsCliente'
import { FiltroHorariosDisponiveisModel } from '../../Models/FiltroHorariosDisponiveis.model'

import { Oval } from 'react-loading-icons'

import Carregando from '../../Pages/FormsAgendamento/Components/Carregando/Carregando'
import { GlobalContext } from '../../Contexts/GlobalContext'


export default function FormsAgendamentoView(props) {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    let navigate = useNavigate()

    let diasDaSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

    ///// Variárveis de Estado /////
    const [fotoVisivel, setFotovisivel] = useState(false)
    const [fotoBarbeiro, setFotoBarbeiro] = useState('')
    const [precoServico, setPrecoServico] = useState(props.precoServico)
    const [idServicoSelecionado, setIdServicoSelecionado] = useState(props.servicoSelecionado)
    const [idBarbeiroSelecionado, setBarbeiroSelecionado] = useState('')
    const [dataSistema, setDataSistema] = useState(formatar.toDate(new Date()))
    const [diaDaSemanaSelecionado, setDiaDaSemanaSelecionado] = useState(diasDaSemana[new Date().getDay()])
    const [dataSelecionada, setDataSelecionada] = useState('')
    const [horaSelecionada, setHoraSelecionada] = useState()
    const [statusAgendamento, setStatusAgendamento] = useState({ carregando: false, erroAgendamento: false })
    const [listaHorariosDisponiveis, setListaHorariosDisponiveis] = useState([])
    const [listarHorariosIsLoading, setListarHorariosIsLoading] = useState(false)
    const [exibirCalendario, setExibirCalendario] = useState(true)


    ///// useForm /////
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validacaoAgendamento)
    })


    ///// Handles /////
    const handleServico = event => {
        setListaHorariosDisponiveis([])
        setBarbeiroSelecionado('')
        setFotovisivel(false)
        setHoraSelecionada()
        setDiaDaSemanaSelecionado(diasDaSemana[new Date().getDay()])
        setPrecoServico(ListarPrecoServico(props.servicos, parseInt(event.target.value)))
        setIdServicoSelecionado(event.target.value)
    }

    const handleBarbeiro = event => {
        setListaHorariosDisponiveis([])
        setHoraSelecionada()
        setDiaDaSemanaSelecionado(diasDaSemana[new Date().getDay()])


        if (event.target.value === '0') {
            setFotovisivel(false)
            setBarbeiroSelecionado('')
        }
        else {
            setExibirCalendario(false)
            setDataSelecionada(dataSistema)
            setBarbeiroSelecionado(event.target.value)
            setFotovisivel(true)
            setFotoBarbeiro(ExibirFotoBarbeiro(props.barbeiros, event.target.value, idServicoSelecionado))
        }
    }

    const handleHora = event => {
        setHoraSelecionada(event)
    }

    const handleData = event => {
        setHoraSelecionada()
        setDataSelecionada(formatar.toDate(event))
        setDiaDaSemanaSelecionado(diasDaSemana[event.getDay()])
    }


    ///// Request /////
    const addAgendamento = dados => {
        let agendamento = new AgendamentoModel(dadosTenantBarbearia.idBarbearia, dados, dataSelecionada, horaSelecionada)
        console.log(agendamento)
        setStatusAgendamento({ ...statusAgendamento, carregando: true })

        RequestsClientes.postAgendamento(agendamento)
            .then((res) => {

                if (res) {
                    setStatusAgendamento({ ...statusAgendamento, erroAgendamento: false })
                    navigate('/confirmacao-agendamento')
                }
                else {
                    setStatusAgendamento({ ...statusAgendamento, erroAgendamento: true })
                    window.alert('Não foi possível agendar, atualize a página!')
                }
            })
            .finally(() => setStatusAgendamento({ ...statusAgendamento, carregando: false }))
    }

    ///// Otimização useMemo /////
    const calendarioMemo = useMemo(() => {
        return <Calendar
            className=" Calendario"
            minDate={idBarbeiroSelecionado !== '' ? props.dataMin : props.dataMax}
            maxDate={idBarbeiroSelecionado !== '' ? props.dataMax : new Date()}
            onChange={handleData}
            defaultValue={new Date()}
        />
    }, [0, idBarbeiroSelecionado])


    ///// Listar /////
    const ListarHorariosDisponiveis = listaHorarios => {
        return listaHorarios.map(horario => {
            horario = horario.toString() + ':00'
            horario = horario.toString().replace('.5:00', ':30')

            if (horario.length === 4)
                horario = '0' + horario

            return <li key={horario} onClick={() => handleHora(horario)} {...register('horario')} className={horaSelecionada === horario ? 'liSelecionado' : ''}>{horario}</li>
        })
    }

    ///// useEffect /////
    useEffect(() => {

        if (idBarbeiroSelecionado != '' && idServicoSelecionado != '' && dataSelecionada != '' && diaDaSemanaSelecionado != '') {
            setListaHorariosDisponiveis([])
            setListarHorariosIsLoading(true)
            RequestsClientes
                .getHorariosDisponiveis(new FiltroHorariosDisponiveisModel(dadosTenantBarbearia.idBarbearia, idBarbeiroSelecionado, idServicoSelecionado, dataSelecionada, diaDaSemanaSelecionado))
                .then(res => {
                    setListaHorariosDisponiveis(res)
                    setListarHorariosIsLoading(false)

                })
        }

    }, [dataSelecionada, idBarbeiroSelecionado])

    useEffect(()=> setExibirCalendario(true), [exibirCalendario])


    ///// HTML /////
    return (
        <>

            <FormsAgendamento>
                <h2>Preencha as informações</h2>
                <form onSubmit={handleSubmit(addAgendamento)}>

                    <label >Serviços:</label>
                    <select name="servicoId" id="servicos" {...register('servicosId')} onChange={handleServico}>
                        <option value="0" key='0'>Selecionar</option>
                        {ListarServicos(props.servicos, props.servicoSelecionado)}
                    </select>
                    <p className="mensagem-erro">{errors.servicosId?.message}</p>


                    <label >Preço do serviço:</label>
                    <input type="text" value={precoServico + ',00 R$'} disabled></input>


                    <label >Barbeiro:</label>
                    <select disabled={idServicoSelecionado === '0' || idServicoSelecionado === '' ? true : false} name="barbeirosId" id="barbeiro" {...register('barbeirosId')} onChange={handleBarbeiro}>
                        <option value="0" key='0'>Selecionar</option>
                        {ListarBarbeiros(props.servicos, idServicoSelecionado)}
                    </select>
                    <p className="mensagem-erro">{errors.barbeirosId?.message}</p>
                    {
                        fotoVisivel && <div className='WrapFotoBarbeiro'>
                            <div><img src={fotoBarbeiro} alt="Foto-Barbeiro" /></div>
                        </div>
                    }


                    <label >Selecione uma data:</label>
                    <div className="WrapCalendario">
                        {exibirCalendario && calendarioMemo}
                    </div>
                

                    <label htmlFor="">Selecione um horário:</label>
                    <ul className="WrapListaHorarios">
                        <div>
                            {
                                listaHorariosDisponiveis.length > 0 && ListarHorariosDisponiveis(listaHorariosDisponiveis)
                            }
                            {
                                listarHorariosIsLoading && <Oval stroke={dadosTenantBarbearia.temas.corSecundaria} speed={.75} />
                            }
                            {
                                !listarHorariosIsLoading && listaHorariosDisponiveis.length <= 0 && <div><p>Nenhum horário disponível.</p></div>
                            }
                        </div>
                    </ul>
                    <p className="mensagem-erro">{errors.horario?.message}</p>


                    <label>Nome:</label>
                    <input type="text" name='name' {...register('name')} maxLength={20} minLength={3}></input>
                    <p className="mensagem-erro">{errors.name?.message}</p>


                    <label>E-mail:</label>
                    <input type="email" name='email' {...register('email')} maxLength={30} minLength={3}></input>
                    <p className="mensagem-erro">{errors.email?.message}</p>


                    <label>Telefone:</label>
                    <input type="tel" name='contato' {...register('contato')} maxLength={11} minLength={3}></input>
                    <p className="mensagem-erro">{errors.contato?.message}</p>


                    <input
                        type="submit"
                        value={statusAgendamento.carregando ? 'Carregando...' : 'Agendar'}
                        className={statusAgendamento.carregando || statusAgendamento.erroAgendamento ? 'Btn-disabled' : ''}
                        disabled={statusAgendamento.carregando || statusAgendamento.erroAgendamento}
                    />

                </form>
            </FormsAgendamento>

            {
                statusAgendamento.carregando && <Carregando />
            }
        </>
    )
}
