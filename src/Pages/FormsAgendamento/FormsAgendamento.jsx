import React, { useEffect } from 'react'

import Header from '../../Components/Header/Header'
import Rodape from '../../Components/Rodape/Rodape';
import FormAgendamento from './Components/Form/FormAgendamento';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../Contexts/GlobalContext';
import { useState } from 'react';


export default function FormsAgendamento() {

    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    const [funcaoAgendamento, setFuncaoAgendamento] = useState(false)

    const rotaBarbearia = localStorage.getItem('rota-barbearia')

    const linkMenuDados = [['Voltar', `/${rotaBarbearia}`]]

    let navigate = useNavigate()

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

        if (!dadosTenantBarbearia || localStorage.getItem('infoAgendamento') || !dadosTenantBarbearia.funcaoAgendamento) {
            navigate(-1)
        }
        else
            setFuncaoAgendamento(true)
    }, [0])

    const HeaderMemo = useMemo(() => <Header linkMenuDados={linkMenuDados} />, [0])

    return (
        funcaoAgendamento &&
        <>
            {HeaderMemo}
            <FormAgendamento />
            <Rodape />
        </>
    )
}
