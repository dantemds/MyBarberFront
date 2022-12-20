import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RequestsClientes } from '../../API/RequestsCliente';
import Header from '../../Components/Header/Header'
import Rodape from '../../Components/Rodape/Rodape';

export default function PainelBarbeiro(props) {

    const [usuarioLogado, setUsuarioLogado] = useState(false)
    const [linksMenu, setLinksMenu] = useState(false)

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
        console.log(props.children)
        switch (props.children.type.name) {
            case 'ServicosAgendados':
                setLinksMenu(linkMenuDados1)
                break;

            case 'EventosMarcados':
                setLinksMenu(linkMenuDados2)
                break;

            case 'CriarEvento':
                setLinksMenu(linkMenuDados3)
                break;

            default:
                setLinksMenu(linkMenuDados3)
                break;
        }
    }

    useEffect(() => {
        try {
            RequestsClientes.getToken()
            setUsuarioLogado(true)
            validarMenu()
        }
        catch {
            setUsuarioLogado(false)
            navigate('/login')
        }
    }, [0])

    return (
        usuarioLogado &&
        <>
            {linksMenu && <Header linkMenuDados={linksMenu} />}
            {props.children}
            <Rodape />
        </>
    )
}