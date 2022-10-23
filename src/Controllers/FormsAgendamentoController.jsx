import React, { useEffect, useState } from 'react'
import { ListaServicoModel } from '../Models/ListaServicoModel'
import FormsAgendamentoView from '../Views/FormsAgendamento/FormsAgendamentoView'

import { GlobalContext } from '../Contexts/GlobalContext'
import { useNavigate } from 'react-router-dom'

export default function FormsAgendamentoController() {
    const { dadosTenantBarbearia, servicoSelecionado } = React.useContext(GlobalContext)
    const [carregou, setCarregou] = useState(false)
    const [servicos, setServicos] = useState([])

    const listaHorarios = []

    let navigate = useNavigate()

    let dataMin = new Date()
    let dataMax = new Date()
    dataMax.setMonth((dataMin.getMonth() + 1))

    useEffect(() => {
        if (!dadosTenantBarbearia) {
            navigate(-1)
        }
        else {
            setServicos(new ListaServicoModel(dadosTenantBarbearia.servicos))
            setCarregou(true)
        }
    }, [0])

    useEffect(() => { 
        console.log(servicoSelecionado)
    }, [servicoSelecionado])


    return (
        carregou &&
        <>
            <FormsAgendamentoView
                servicos={servicos.servicos}
                servicoSelecionado={servicoSelecionado ? servicoSelecionado.id : ''}
                precoServico={servicoSelecionado ? servicoSelecionado.preco : '00'}
                barbeiros={servicos.barbeiros}
                dataMin={dataMin}
                dataMax={dataMax}
                listaHorarios={listaHorarios}
            />
        </>
    )
}
