import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RequestsClientes } from '../../API/RequestsCliente';
import Header from '../../Components/Header/Header'
import Rodape from '../../Components/Rodape/Rodape';

export default function PainelBarbeiro(props) {

    const [usuarioLogado, setUsuarioLogado] = useState(false)

    let navigate = useNavigate()

    const linkMenuDados1 = [
        ['Eventos', '/painel-barbeiro/eventos'],
        ['Sair', 'sair'],
    ]

    const linkMenuDados2 = [
        ['Criar evento', '/painel-barbeiro/evento'],
        ['Voltar', '/painel-barbeiro'],
        ['Sair', 'sair'],
    ]

    const linkMenuDados3 = [
        ['Voltar', '/painel-barbeiro'],
        ['Sair', 'sair']
    ]

    const validarMenu = () => {
        let menuCorreto = ''

        switch (props.children.type.name) {
            case 'ServicosAgendados':
                menuCorreto = linkMenuDados1
                break;

            case 'EventosMarcados':
                menuCorreto = linkMenuDados2
                break;

            case 'CriarEvento':
                menuCorreto = linkMenuDados3
                break;

            default:
                menuCorreto = linkMenuDados3
                break;
        }

        return menuCorreto
    }

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
            <Header linkMenuDados={validarMenu()} />
            {props.children}
            <Rodape />
        </>
    )
}