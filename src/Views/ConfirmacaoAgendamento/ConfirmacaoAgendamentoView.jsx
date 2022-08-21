import React from 'react'
import { Link } from 'react-router-dom'
import { ServicoContext } from '../../Contexts/ServicoContext'

import { ConfirmacaoAgendamento } from './style'

export default function ConfirmacaoAgendamentoView() {

    const { rotaBarbearia} = React.useContext(ServicoContext)

    return (
        <ConfirmacaoAgendamento>
            <div >
                <img alt="imagem-background" />
                <div >
                    <h1>Agendamento Realizado</h1>
                    <p>Você receberá um e-mail de confirmação.</p>

                    <Link to={`/${rotaBarbearia}`}><button>Voltar ao início</button></Link>
                </div>
            </div>
        </ConfirmacaoAgendamento>
    )
}
