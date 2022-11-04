import React, { useContext } from 'react'

import DetalhesAgendamento from '../DetalhesAgendamento/DetalhesAgendamento'
import ModalConfirmacao from '../../../../Components/ModalConfirmacao/ModalConfirmacao'

import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../../../../API/RequestsCliente'

import { AgendaSC } from './style'
import CardAgendamento from '../CardAgendamento/CardAgendamento'
import { CardAgendamentoModel } from '../../../../Models/CardAgendamentoModel'



export default function Agenda(props) {

  const { exibirDetalhesAgendamento, exibirConfirmacaoCancelamento, idAgendamento } = React.useContext(DetalhesAgendamentoContext)


  const ExibirModal = () => {
    return <DetalhesAgendamento listaAgendamentos={props.listaAgendamentos} />
  }

  const ListarAgendamentos = () => {

    if (props.listaAgendamentos.length !== 0) {

      return props.listaAgendamentos.map(agendamento => {

        let Agendamento = new CardAgendamentoModel(agendamento)

        return <CardAgendamento key={Agendamento.id} agendamento={Agendamento}></CardAgendamento>
      })
    }
    else
      return <p>Nenhum agendamento marcado para esta data.</p>
  }

  return (
    <>
      <AgendaSC>
        {ListarAgendamentos(props.listaAgendamentos)}
      </AgendaSC>

      {exibirDetalhesAgendamento && ExibirModal()}

      {exibirConfirmacaoCancelamento &&
        <ModalConfirmacao
          mensagem={'Tem certeza que deseja cancelar este agendamento ?'}
          acao={() => RequestsClientes.deleteAgendamento(idAgendamento)}
        />}
    </>
  )
}
