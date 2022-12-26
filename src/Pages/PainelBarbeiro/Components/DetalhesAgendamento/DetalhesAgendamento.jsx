import React from 'react'
import { DetalhesAgendamentoSC } from './style'
import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'
import { CardAgendamentoModel } from '../../../../Models/CardAgendamentoModel'
import { useEffect } from 'react'
import { lockScroll, unlockScroll } from '../../../../Utils/functions'
import { EventoModel } from '../../../../Models/EventoModel'

export default function DetalhesAgendamento(props) {

    const { exibirDetalhesAgendamento, setExibirDetalhesAgendamento, idAgendamento, setExibirConfirmacaoCancelamento, setExibirConfirmacaoCancelamentoEvento } = React.useContext(DetalhesAgendamentoContext)

    const agendamento = props.factory == 'agendamento';
    const CalcelarAgendamento = () => {
        setExibirDetalhesAgendamento(false)
        if (agendamento) {
            setExibirConfirmacaoCancelamento(true)

        } else {
            setExibirConfirmacaoCancelamentoEvento(true)

        }
    }


    useEffect(() => {
        lockScroll()
    }, [0])

    const EventoSelecionado = () => {
        return props.listaAgendamentos.map(evento => {
            console.log(evento)
            let Evento = new EventoModel(evento);
            const temporario = () => {
                return <><tr>
                    <td>Data inicial</td>
                    <td>{Evento.dataIncio}</td>
                </tr>
                    <tr>
                        <td>Data Final</td>
                        <td>{Evento.dataFim}</td>
                    </tr></>
            }
            if (Evento.id == idAgendamento)
                return <DetalhesAgendamentoSC key={Evento.id}>
                    <div>
                        <div>
                            <button onClick={() => (setExibirDetalhesAgendamento(!exibirDetalhesAgendamento), unlockScroll())}>X</button>
                            <h3>Detalhes do Evento</h3>
                        </div>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Nome evento</td>
                                        <td>{Evento.nomeEvento}</td>
                                    </tr>
                                    <tr>
                                        <td>Descrição</td>
                                        <td>{Evento.descricaoEvento}</td>
                                    </tr>
                                    <tr>
                                        <td>Duração</td>
                                        <td>{Evento.duracao}</td>
                                    </tr>
                                    <tr>
                                        <td>Início</td>
                                        <td>{Evento.horaInicio}</td>
                                    </tr>
                                    <tr>
                                        <td>Fim</td>
                                        <td>{Evento.horaFim}</td>
                                    </tr>
                                    <tr>
                                        <td>Temporário</td>
                                        <td><input type='checkbox' checked={Evento.temporario} readOnly></input></td>
                                    </tr>
                                    {console.log(Evento)}
                                    {Evento.temporario == true ? <temporario></temporario> : ''}
                                </tbody>
                            </table>
                        </div>
                        <button className='btn-Cancelar' onClick={() => CalcelarAgendamento()}>Excluir evento</button>
                    </div>
                </DetalhesAgendamentoSC>
        });
    }

    const ServicoSelecionado = () => {
        return props.listaAgendamentos.map(agendamento => {
            let Agendamento = new CardAgendamentoModel(agendamento)

            if (Agendamento.id == idAgendamento)
                return <DetalhesAgendamentoSC key={Agendamento.id}>
                    <div>

                        <div>
                            <button onClick={() => (setExibirDetalhesAgendamento(!exibirDetalhesAgendamento), unlockScroll())}>X</button>
                            <h3>Detalhes do Agendamento</h3>
                        </div>

                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Horário</td>
                                        <td>{Agendamento.horarioServico.slice(11, 16)}</td>
                                    </tr>
                                    <tr>
                                        <td>Serviço</td>
                                        <td>{Agendamento.nomeServico}</td>
                                    </tr>
                                    <tr>
                                        <td>Cliente</td>
                                        <td>{Agendamento.nomeCliente}</td>
                                    </tr>
                                    <tr>
                                        <td>Contato</td>
                                        <td><a className='AgendaBarbeiro-a' href={"tel:" + Agendamento.contatoCliente}>{Agendamento.contatoCliente}</a></td>
                                    </tr>
                                    <tr>
                                        <td>E-mail</td>
                                        <td><a className='AgendaBarbeiro-a' href={"mailto:" + Agendamento.emailCliente + "?subject=Dúvidas Atemdimento"} target="_blank">{Agendamento.emailCliente}</a></td>
                                    </tr>
                                    <tr>
                                        <td>Preço</td>
                                        <td>{Agendamento.precoServico},00 R$</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {
                            new Date(Agendamento.horarioServico) < new Date()
                                ? ''
                                : <button className='btn-Cancelar' onClick={() => CalcelarAgendamento()}>Cancelar Agendamento</button>
                        }

                    </div>
                </DetalhesAgendamentoSC>
        })
    }

    return (
        (agendamento) ? ServicoSelecionado() : EventoSelecionado()
    )
}