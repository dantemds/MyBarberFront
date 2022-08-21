import React from 'react'
import CardAgendamento from '../../Components/CardAgendamento/CardAgendamento'
import { CardAgendamentoModel } from '../../Models/CardAgendamentoModel'
import { Agenda } from './style'

export default function AgendaView(props) {

  const ListarAgendamentos = () => {

    if (props.listaAgendamentos.length != 0) {
      
      return props.listaAgendamentos.map(agendamento => {

        let Agendamento = new CardAgendamentoModel(agendamento)

        return <CardAgendamento key={Agendamento.id} agendamento={Agendamento}></CardAgendamento>
      })
    }
    else
      return <p>Nenhum agendamento marcado para esta data.</p>
  }

  return (
    <Agenda>
      {ListarAgendamentos()}
    </Agenda>
  )
}
