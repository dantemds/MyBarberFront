import React from 'react'

import Header from '../Components/Header/Header'
import ConfirmacaoAgendamentoView from '../Components/ConfirmacaoAgendamento/ConfirmacaoAgendamentoView'

export default function ConfirmacaoAgendamento() {

    const linkMenuDados = [['Voltar', '/']]

    return (
        <>
            <Header linkMenuDados={linkMenuDados} />
            <ConfirmacaoAgendamentoView/>
        </>
    )
}
