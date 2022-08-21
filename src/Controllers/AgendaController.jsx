import React, { useContext } from 'react'

import DetalhesAgendamento from '../Components/DetalhesAgendamento/DetalhesAgendamento'
import ModalConfirmacao from '../Components/ModalConfirmacao/ModalConfirmacao'
import AgendaView from '../Views/Agenda/AgendaView'

import { DetalhesAgendamentoContext } from '../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../API/RequestsCliente'


export default function AgendaConstroller(props) {

  const { exibirDetalhesAgendamento, exibirConfirmacaoCancelamento, idAgendamento } = React.useContext(DetalhesAgendamentoContext)


  const ExibirModal = () => {
    return <DetalhesAgendamento listaAgendamentos={props.listaAgendamentos} />
  }

  return (
    <>
      <AgendaView listaAgendamentos={props.listaAgendamentos} />
      
      {exibirDetalhesAgendamento && ExibirModal()}

      {exibirConfirmacaoCancelamento &&
        <ModalConfirmacao
          mensagem={'Tem certeza que deseja cancelar este agendamento ?'}
          acao={() => RequestsClientes.deleteAgendamento(idAgendamento)}
        />}
    </>
  )
}
