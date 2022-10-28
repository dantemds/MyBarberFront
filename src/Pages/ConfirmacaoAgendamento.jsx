import React from 'react'

import Header from '../Components/Header/Header'
import ConfirmacaoAgendamentoView from '../Components/ConfirmacaoAgendamento/ConfirmacaoAgendamentoView'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { GlobalContext } from '../Contexts/GlobalContext'

export default function ConfirmacaoAgendamento() {

    const {agendamentoRealizado} = useContext(GlobalContext)

    const linkMenuDados = [['Voltar', '/']]

    let navigate = useNavigate()

    
    useEffect(()=> {
        if(!agendamentoRealizado)
            navigate(-1)
    }, [])

    return (
        <>
            <Header linkMenuDados={linkMenuDados} />
            <ConfirmacaoAgendamentoView/>
        </>
    )
}
