import React, { useEffect, useState } from 'react'

import Header from '../Components/Header/Header';
import ApresentacaoView from '../Views/Apresentacao/ApresentacaoView';
import Mapa from '../Components/Mapa/Mapa';
import Rodape from '../Components/Rodape/Rodape';
import Sobre from '../Components/Sobre/Sobre';

import { RequestsClientes } from '../API/RequestsCliente';
import { useNavigate, useParams } from 'react-router-dom';
import { ServicoContext } from '../Contexts/ServicoContext';
import Servicos from '../Components/Servicos/Servicos';

export default function Inicio() {
    let navigate = useNavigate()

    const { setIdBarbearia, setRotaBarbearia } = React.useContext(ServicoContext)

    const [dadosBarbearia, setDadosBarbearia] = useState()
    const { barbearia } = useParams()
    

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

        RequestsClientes.getAll(barbearia)
            .then(res => {
                setRotaBarbearia(barbearia)
                setDadosBarbearia(res)
                setIdBarbearia(res.idBarbearia)
            })
            .catch(() => navigate('/login'))
        // }


    }, [0])

    const linkMenuDados = [
        ['Início', '#Apresentacao'],
        ['Serviços', '#Servico'],
        ['Sobre', '#Sobre'],
        ['Endereço', '#Mapa-Section'],
        ['Agendar', '/forms-agendamento']]

    return (

        dadosBarbearia &&
        <>
            <Header linkMenuDados={linkMenuDados} />
            <ApresentacaoView />
            <Servicos />
            <Sobre />
            <Mapa />
            <Rodape />
        </>
    )
}
