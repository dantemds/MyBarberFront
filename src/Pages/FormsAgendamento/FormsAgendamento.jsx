import React, { useEffect } from 'react'

import Header from '../../Components/Header/Header'
import Rodape from '../../Components/Rodape/Rodape';
import FormAgendamento from './Components/Form/FormAgendamento';
import { useMemo } from 'react';


export default function FormsAgendamento() {

    const  rotaBarbearia= localStorage.getItem('rota-barbearia')

    const linkMenuDados = [['Voltar', `/${rotaBarbearia}`]]

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [0])

    const HeaderMemo = useMemo(() => <Header linkMenuDados={linkMenuDados} />, [0])

    return (
        <>
            {HeaderMemo}
            <FormAgendamento/>
            <Rodape />
        </>
    )
}
