import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RequestsClientes } from '../API/RequestsCliente';

import Header from '../Components/Header/Header'
import Rodape from '../Components/Rodape/Rodape';
import ServicosAgendadosController from '../Controllers/ServicosAgendadosController'


export default function PainelBarbeiro() {

    const [usuarioLogado, setUsuarioLogado] = useState(false)

    let navigate = useNavigate()

    const linkMenuDados = [
        ['Sair', '#'],
    ]

    useEffect(() => {
        try {
            RequestsClientes.getToken()
            setUsuarioLogado(true)
        }
        catch {
            setUsuarioLogado(false)
            navigate('/login')
        }
    }, [0])

    return (
        usuarioLogado &&
        <>
            <Header linkMenuDados={linkMenuDados} />
            <ServicosAgendadosController />
            <Rodape />
        </>
    )
}
