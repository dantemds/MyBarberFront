import React, { useEffect, useMemo, useState } from 'react'
import ListarServicos, { ListarPrecoServico, ListarBarbeiros } from '../../../../Scripts/FormsAgendamento/Listar'

import { FormsAgendamento } from '../../../../Views/FormsAgendamento/style'

import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'

import ExibirFotoBarbeiro from '../../../../Scripts/FormsAgendamento/Exibir'

import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validacaoAgendamento } from '../../../../Validations/AgendamentoValidation'

import { formatar } from '../../../../Scripts/FormsAgendamento/Formatar'
import { AgendamentoModel } from '../../../../Models/AgendamentoModel'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import { FiltroHorariosDisponiveisModel } from '../../../../Models/FiltroHorariosDisponiveis.model'

import { Oval } from 'react-loading-icons'

import Carregando from '../Carregando/Carregando'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { isExist } from '../../../../Utils/functions'
import { ListaServicoModel } from '../../../../Models/ListaServicoModel'
import { CardServicoModel } from '../../../../Models/CardServicoModel'


export default function FormAgendamento(props) {
    const { dadosTenantBarbearia, servicoSelecionado, setServicoSelecionado } = React.useContext(GlobalContext)

    let navigate = useNavigate()

    let diasDaSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"]

    const [listaServicos, setListaServico] = useState(null)
    const [statusAgendamento, setStatusAgendamento] = useState({ carregando: true, erroAgendamento: false })
    const [carregou, setCarregou] = useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm({
        // resolver: yupResolver(validacaoAgendamento)
    })


    useEffect(() => {
        if (!dadosTenantBarbearia) {
            navigate(-1)
        }
        else {
            setCarregou(true)
            setListaServico(new ListaServicoModel(dadosTenantBarbearia.servicos).servicos)
        }
    }, [])

    ///// ---------------------------------- /////
    const listarServicos = () => {
        return listaServicos.map(servico => {
            if (servicoSelecionado.id === servico.id)
                return <option key={servico.id} value={servico.id} selected >{servico.nome}</option>
            else
                return <option key={servico.id} value={servico.id}>{servico.nome}</option>
        })
    }

    const listarBarbeiros = () => {
        return servicoSelecionado.listaBarbeiros.map(barbeiro => {
            return <option
                key={`${barbeiro.barbeiros.idBarbeiro}${barbeiro.barbeiros.nameBarbeiro}`}
                value={barbeiro.barbeiros.idBarbeiro}>{barbeiro.barbeiros.nameBarbeiro}
            </option>
        })
    }

    ///// ---------------------------------- /////
    const handleServico = event => {
        if (event.target.value === '0')
            setServicoSelecionado(new CardServicoModel())
        else
            setServicoSelecionado(listaServicos.find(servico => servico.id === event.target.value))
    }



    ///// ---------------------------------- /////
    const addAgendamento = dadosAgendamento => {
        console.log(dadosAgendamento)
    }

    return (
        carregou &&
        <>

            <FormsAgendamento>
                <h2>Preencha as informações</h2>
                <form onSubmit={handleSubmit(addAgendamento)}>
                    {/* <labell >Serviços:</labell> */}
                    <select
                        name='servico'
                        {...register("servicosId")}
                        onChange={handleServico}
                    >
                        <option value="0" key='0'>Selecione o Serviço</option>
                        {dadosTenantBarbearia.servicos && listarServicos()}
                    </select>

                    <input type="text" value={'Preço: ' + servicoSelecionado.preco + ',00 R$'} disabled></input>

                    <select
                        disabled={servicoSelecionado.preco === '00'}
                        {...register("barbeirosId")}
                    >
                        <option value='0' key='0'>Selecione o Barbeiro</option>
                        {servicoSelecionado.preco !== '00' && listarBarbeiros()}
                    </select>

                    <button type='submit'>Agendar</button>
                </form>
            </FormsAgendamento>

        </>
    )
}
