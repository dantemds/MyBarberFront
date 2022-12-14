import React, { Children, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { RequestsClientes } from '../../API/RequestsCliente';
import Header from '../../Components/Header/Header'
import Rodape from '../../Components/Rodape/Rodape';



export default function PainelBarbeiro(props) {

    const [usuarioLogado, setUsuarioLogado] = useState(false)
console.log(props.children);
    let navigate = useNavigate()

    const linkMenuDados = [
        (props.children.type.name == 'EventosMarcados') ? ['Criar evento', '/painel-barbeiro/evento']:[],
        (props.children.type.name == 'CriarEvento' || props.children.type.name == 'EventosMarcados') ?  ['Voltar', '/painel-barbeiro'] : 
        ['Eventos', '/painel-barbeiro/eventos'],
        ['Sair', ''],
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
            {props.children}
            <Rodape />
        </>
    )
}
