import React, { useState } from 'react'
import { DetalhesAgendamentoContext } from '../../../../Contexts/DetalhesAgendamentoContext'

import { CardAgendamentoStyle } from './style'


export default function CardAgendamento(props) {

    const { exibirDetalhesAgendamento, setExibirDetalhesAgendamento, setIdAgendamento } = React.useContext(DetalhesAgendamentoContext)

    const hora = props.agendamento.horarioServico.slice(11, 16)
    // console.log(props)
    return (
        <CardAgendamentoStyle onClick={() => {
            setExibirDetalhesAgendamento(!exibirDetalhesAgendamento)
            setIdAgendamento(props.agendamento.id)
        }}>
            <div>
                <div><p>{hora}</p></div>
            </div>
            <div>
                <div><p>{props.agendamento.nomeCliente}</p></div>
            </div>
            <div>
                <div><p>{props.agendamento.nomeServico}</p></div>
            </div>
        </CardAgendamentoStyle>
    )
}
