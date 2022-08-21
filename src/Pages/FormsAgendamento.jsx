import React, { useEffect } from 'react'
import { ServicoContext } from '../Contexts/ServicoContext';
import FormsAgendamentoController from '../Controllers/FormsAgendamentoController';

import Header from '../Components/Header/Header'
import Rodape from '../Components/Rodape/Rodape';


export default function FormsAgendamento() {

    const { rotaBarbearia } = React.useContext(ServicoContext)

    const linkMenuDados = [['Voltar', `/${rotaBarbearia}`]]

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }, [0])

    return (
        <>
            <Header linkMenuDados={linkMenuDados} />
            <FormsAgendamentoController />
            <Rodape />
        </>
    )
}
