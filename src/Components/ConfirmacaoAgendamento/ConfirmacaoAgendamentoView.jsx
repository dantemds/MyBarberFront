import React from 'react'
import { Link } from 'react-router-dom'

import { ConfirmacaoAgendamento } from './style'

export default function ConfirmacaoAgendamentoView() {

    const rotaBarbearia = localStorage.getItem('rota-barbearia')
    const infoAgendamento = JSON.parse(localStorage.getItem('infoAgendamento'))

    return (
        <ConfirmacaoAgendamento>
            <div >
                <div >
                    <h1>Agendamento Confirmado</h1>
                    <p>Você deverá comparecer na data <span>{infoAgendamento.horario.slice(0, 10).replaceAll('-', '/')}</span> e horário <span> {infoAgendamento.horario.slice(11, 16).replaceAll('-', '/')}</span>.
                    </p>

                    <Link to={`/${rotaBarbearia}`}><button>Voltar ao início</button></Link>
                </div>
            </div>
            <picture>
                <source media='(max-width: 800px)' srcSet='https://minha-barbearia.online/images/static/Background-mobile.jpg' />
                <img src="https://minha-barbearia.online/images/static/Background-desktop.jpg" alt="" />
            </picture>
        </ConfirmacaoAgendamento>
    )
}
