import React, { useState } from 'react'

export const DetalhesAgendamentoContext = React.createContext({})

export const DetalhesAgendamentoProvider = (props) => {
    const [exibirDetalhesAgendamento, setExibirDetalhesAgendamento] = useState(false)
    const [idAgendamento, setIdAgendamento] = useState(null)
    const [exibirConfirmacaoCancelamento, setExibirConfirmacaoCancelamento] = useState(false)

    return (
        <DetalhesAgendamentoContext.Provider value={{
            exibirDetalhesAgendamento, setExibirDetalhesAgendamento,
            exibirConfirmacaoCancelamento, setExibirConfirmacaoCancelamento,
            idAgendamento, setIdAgendamento,
        }}>
            {props.children}
        </DetalhesAgendamentoContext.Provider>
    )
}