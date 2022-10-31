import React from 'react'
import { DetalhesAgendamentoSC } from './style'
import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'
import { CardAgendamentoModel } from '../../../../Models/CardAgendamentoModel'

export default function DetalhesAgendamento(props) {

    const { exibirDetalhesAgendamento, setExibirDetalhesAgendamento, idAgendamento, setExibirConfirmacaoCancelamento } = React.useContext(DetalhesAgendamentoContext)

    const CalcelarAgendamento = () => {
        setExibirDetalhesAgendamento(false)
        setExibirConfirmacaoCancelamento(true)
    }

    const ServicoSelecionado = () => {
        return props.listaAgendamentos.map(agendamento => {
            let Agendamento = new CardAgendamentoModel(agendamento)

            if (Agendamento.id == idAgendamento)
                return <DetalhesAgendamentoSC key={Agendamento.id}>
                    <div>

                        <div>
                            <button onClick={() => setExibirDetalhesAgendamento(!exibirDetalhesAgendamento)}>X</button>
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
        ServicoSelecionado()
    )
}