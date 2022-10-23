import React, { useEffect, useState } from 'react'

import Header from '../../Components/Header/Header';
import Mapa from './Components/Mapa/Mapa';
import Rodape from '../../Components/Rodape/Rodape';
import Sobre from './Components/Sobre/Sobre';

import { RequestsClientes } from '../../API/RequestsCliente';
import { useNavigate, useParams } from 'react-router-dom';
import Servicos from './Components/Servicos/Servicos';
import Apresentacao from './Components/Apresentacao/Apresentacao';
import { GlobalContext } from '../../Contexts/GlobalContext'
import { CardServicoModel } from '../../Models/CardServicoModel';
export default function Inicio() {
    let navigate = useNavigate()

    const {dadosTenantBarbearia, setDadosTenantBarbearia, setServicoSelecionado} = React.useContext(GlobalContext)

    const { barbearia } = useParams()
    

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

        setServicoSelecionado(new CardServicoModel()) // Resetar o serviço selecionado caso usuário volte para o Início

        RequestsClientes.getAll(barbearia)
            .then(res => {
                localStorage.setItem('rota-barbearia', barbearia)
                setDadosTenantBarbearia(res)
            })
            .catch(() => navigate('/login'))
        
    }, [0])

    const linkMenuDados = [
        ['Início', '#Apresentacao'],
        ['Serviços', '#Servico'],
        ['Sobre', '#Sobre'],
        ['Endereço', '#Mapa-Section'],
        ['Agendar', '/forms-agendamento']]

    return (

        dadosTenantBarbearia &&
        <>
            <Header linkMenuDados={linkMenuDados} />
            <Apresentacao />
            <Servicos />
            <Sobre />
            <Mapa />
            <Rodape />
        </>
    )
}
