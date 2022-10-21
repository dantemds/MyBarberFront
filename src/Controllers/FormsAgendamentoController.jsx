import React, { useEffect, useState } from 'react'
import { ListaServicoModel } from '../Models/ListaServicoModel'
import FormsAgendamentoView from '../Views/FormsAgendamento/FormsAgendamentoView'

import { GlobalContext } from '../Contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'


export default function FormsAgendamentoController() {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    const listaHorarios = []

    ///// DATA /////
    let dataMin = new Date()
    let dataMax = new Date()
    dataMax.setMonth((dataMin.getMonth() + 1))


    ///// Dados da barbearia /////
    const [servicos, setServicos] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        if (!dadosTenantBarbearia) {
            navigate(-1)
        }
        else {
            setServicos(new ListaServicoModel(dadosTenantBarbearia.servicos))
            setCarregou(true)
        }
    }, [0])

    // useEffect(() => { 
    //     console.log(servicos)
    // }, [servicos])

    ///// Gerenciar estado /////
    const [carregou, setCarregou] = useState(false)
    const { ServicoSelecionado } = React.useContext(GlobalContext)

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
