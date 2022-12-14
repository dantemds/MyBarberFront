import React, { useContext } from 'react'

import DetalhesAgendamento from '../DetalhesAgendamento/DetalhesAgendamento'
import ModalConfirmacao from '../../../../Components/ModalConfirmacao/ModalConfirmacao'

import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../../../../API/RequestsCliente'

import { AgendaSC } from './style'
import CardAgendamento from '../CardAgendamento/CardAgendamento'
import { CardAgendamentoModel } from '../../../../Models/CardAgendamentoModel'
import CardEvento from '../CardEvento/CardEvento'
import { EventoModel } from '../../../../Models/EventoModel'

export default function Agenda(props) {

  const { exibirDetalhesAgendamento, exibirConfirmacaoCancelamento, idAgendamento, exibirConfirmacaoCancelamentoEvento } = React.useContext(DetalhesAgendamentoContext)
console.log('e', exibirDetalhesAgendamento);
  const agendamento = props.factory == 'agendamento';
  const ExibirModal = () => {
    return <DetalhesAgendamento factory={props.factory} listaAgendamentos={props.listaAgendamentos} />
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

  const ListarEventos = () => {
    
    if (props.listaAgendamentos.length !== 0) {
      return props.listaAgendamentos.map(evento => {
        let Evento = new EventoModel(evento);
        return <CardEvento key={Evento.id} evento={Evento}></CardEvento>
      })

    }
    else
      return <p>Nenhum Evento marcado para este dia.</p>

  } 

  return (
    <>
      <AgendaSC>
        {agendamento ? ListarAgendamentos(props.listaAgendamentos) : ListarEventos(props.listaAgendamentos)}
        
        
      </AgendaSC>

      {exibirDetalhesAgendamento && ExibirModal()}

      {exibirConfirmacaoCancelamento &&
        <ModalConfirmacao
          mensagem={'Tem certeza que deseja cancelar este agendamento ?'}
          acao={() => RequestsClientes.deleteAgendamento(idAgendamento)}
        />}
      {exibirConfirmacaoCancelamentoEvento &&
        <ModalConfirmacao
        mensagem={'Tem certeza que deseja cancelar este evento ?'}
        acao={() => RequestsClientes.deleteEvento(idAgendamento)}
        />
      }

    </>
  )
}
