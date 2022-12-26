import { CardEventoStyle } from "./style"
import React, { useState } from 'react'
import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'

export default function CardEvento(props) {
    // console.log('porps', props)

    const { exibirDetalhesAgendamento, setExibirDetalhesAgendamento, setIdAgendamento } = React.useContext(DetalhesAgendamentoContext)
    return (
        <CardEventoStyle onClick={() => {
            setExibirDetalhesAgendamento(!exibirDetalhesAgendamento)
            setIdAgendamento(props.evento.id)
        }}>
            <div>
                <div><p>{props.evento.horaInicio}</p></div>
            </div>
            <div>
                <div><p>{props.evento.horaFim}</p></div>
            </div>
            <div>
                <div><p>{props.evento.nomeEvento}</p></div>
            </div>
        </CardEventoStyle>
    )
}