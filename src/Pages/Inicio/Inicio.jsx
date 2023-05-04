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
import PermisssionGate from '../../Validations/PermissionGate';
export default function Inicio() {
    let navigate = useNavigate()

    const { dadosTenantBarbearia, setDadosTenantBarbearia, setServicoSelecionado } = React.useContext(GlobalContext)

    const { barbearia } = useParams()

    useEffect(() => {
        // obtém a URL atual do navegador
        var currentUrl = window.location.href;
        console.log(currentUrl)

        // atualiza a start_url no manifest.json com a URL atual
        fetch('manifest.json')
            .then(response => response.json())
            .then(data => {
                data.start_url = currentUrl;
                const updatedManifest = JSON.stringify(data);
                const blob = new Blob([updatedManifest], { type: 'application/json' });
                const manifestUrl = URL.createObjectURL(blob);
                const link = document.querySelector('link[rel="manifest"]');
                link.href = manifestUrl;
            });

        setTimeout(() => {
            fetch('manifest.json')
                .then(response => response.json())
                .then(data => {

                    console.log(data.start_url)
                });

        }, [3000])

        window.scroll({
            top: 0,
            behavior: 'smooth'
        })

        // window.localStorage.clear()
        localStorage.removeItem('rota-barbearia')
        localStorage.removeItem('infoAgendamento')

        setServicoSelecionado(new CardServicoModel()) // Resetar o serviço selecionado caso usuário volte para o Início

        RequestsClientes.getAll(barbearia)
            .then(res => {
                localStorage.setItem('rota-barbearia', barbearia)
                setDadosTenantBarbearia(res)
            })
            .catch(() => navigate('/ops'))

    }, [0])

    useEffect(() => {
        if (dadosTenantBarbearia && dadosTenantBarbearia.ativa === false) {
            navigate('/ops')
            setDadosTenantBarbearia(null)
        }

    }, [dadosTenantBarbearia])

    const linkMenuDadosAgendamento = [
        ['Início', '#Apresentacao'],
        ['Serviços', '#Servico'],
        ['Sobre', '#Sobre'],
        ['Contatos', '#contato'],
        ['Mapa', '#Mapa'],
        ['Agendar', '/forms-agendamento']]

    const linkMenuDadosSemAgendamento = [
        ['Início', '#Apresentacao'],
        ['Serviços', '#Servico'],
        ['Sobre', '#Sobre'],
        ['Contatos', '#contato'],
        ['Mapa', '#Mapa']]

    return (
        (dadosTenantBarbearia && dadosTenantBarbearia.ativa === true) &&
        <>
            <Header linkMenuDados={dadosTenantBarbearia.funcaoAgendamento ? linkMenuDadosAgendamento : linkMenuDadosSemAgendamento} />
            <Apresentacao />
            <Servicos />
            <Sobre />
            <Mapa />
            <Rodape />
        </>
    )
}
