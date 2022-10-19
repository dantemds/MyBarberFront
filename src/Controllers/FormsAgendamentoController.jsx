import React, { useEffect, useState } from 'react'
import { ListaServicoModel } from '../Models/ListaServicoModel'
import FormsAgendamentoView from '../Views/FormsAgendamento/FormsAgendamentoView'

import { ServicoContext } from '../Contexts/ServicoContext'


export default function FormsAgendamentoController() {

    // ------------------------------------------------------------------------------------------------------------------------------------
    ///// Simulação de dados da API /////

    // const listaHorarios = ['08:00', '09:00', '08:00', '09:00', '08:00', '09:00', '08:00', '09:00']
    const listaHorarios = []
    // ------------------------------------------------------------------------------------------------------------------------------------

    const dadosBarbearia = JSON.parse(window.localStorage.getItem('barbeariaAll'))


    ///// DATA /////
    let dataMin = new Date()
    let dataMax = new Date()
    dataMax.setMonth((dataMin.getMonth() + 1))


    ///// Dados da barbearia /////
    const [servicos, setServicos] = useState([])

    useEffect(() => {


        setServicos(new ListaServicoModel(dadosBarbearia.servicos))

        setCarregou(true)
    }, [0])

    // useEffect(() => { 
    //     console.log(servicos)
    // }, [servicos])

    ///// Gerenciar estado /////
    const [carregou, setCarregou] = useState(false)
    const { ServicoSelecionado } = React.useContext(ServicoContext)

    return (
        carregou &&
        <>
            <FormsAgendamentoView
                servicos={servicos.servicos}
                servicoSelecionado={ServicoSelecionado ? ServicoSelecionado.id : ''}
                precoServico={ServicoSelecionado ? ServicoSelecionado.preco : '00'}
                barbeiros={servicos.barbeiros}
                dataMin={dataMin}
                dataMax={dataMax}
                listaHorarios={listaHorarios}
            />
        </>
    )
}
