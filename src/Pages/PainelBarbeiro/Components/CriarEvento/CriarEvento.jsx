import React from 'react'
import { useState } from 'react'
import { CriarEventoSC } from './style'
import { padronizaData, padronizaFeedbackEvento } from '../../../../Utils/functions.js'
import { RequestsClientes } from '../../../.././API/RequestsCliente.js'
import { validacaoEvento } from '../../../../Validations/EventosValidation'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react';
import ModalRequestsEventos from '../../../../Components/Status/ModalRequestsEventos/ModalRequestsEventos'
import { useNavigate } from 'react-router-dom'

export default function CriarEvento() {
    let navigate = useNavigate()

    const [eventoFixo, setEventoFixo] = useState({
        NomeEvento: '',
        DescricaoEvento: '',
        HoraInicio: '',
        HoraFim: '',
        DiaSemana: '',
        BarbeariasId: '',
        BarbeirosId: '',
        DataInicio: '',
        DataFim: '',
        Temporario: true,
    })

    const options = [
        { value: 'domingo', label: 'Domingo' },
        { value: 'segunda', label: 'Segunda-Feira' },
        { value: 'terca', label: 'Terça-Feira' },
        { value: 'quarta', label: 'Quarta-Feira' },
        { value: 'quinta', label: 'Quinta-Feira' },
        { value: 'sexta', label: 'Sexta-Feira' },
        { value: 'sabado', label: 'Sábado' },
    ]

    const [respostaRequest, setRespostaRequest] = useState([])
    const [horariosBloqueio, setHorariosBloqueio] = useState([])
    const [modalStatus, setModalStatus] = useState(false)
    const [checkedDia, setCheckedDia] = useState(
        new Array(options.length).fill(false)
    )

    const { register, handleSubmit, formState: { errors }, setValue, getValues, clearErrors } = useForm({
        resolver: yupResolver(validacaoEvento)
    })


    const handleNomeEvento = event => {
        setEventoFixo({ ...eventoFixo, NomeEvento: event.target.value })
        clearErrors('NomeEvento')
    }

    const handleDescricaoEvento = event => {
        setEventoFixo({ ...eventoFixo, DescricaoEvento: event.target.value })
        clearErrors('DescricaoEvento')
    }

    const handleHoraInicio = event => {
        setEventoFixo({ ...eventoFixo, HoraInicio: event.target.value })
        clearErrors('HoraInicio')
    }

    const handleHoraFim = event => {
        setEventoFixo({ ...eventoFixo, HoraFim: event.target.value })
        clearErrors('HoraFim')
    }

    const handleDataInicio = event => {
        setEventoFixo({ ...eventoFixo, DataInicio: padronizaData(event.target.value) })
        clearErrors('DataInicio')
    }

    const handleDataFim = event => {
        setEventoFixo({ ...eventoFixo, DataFim: padronizaData(event.target.value) })
        clearErrors('DataFim')
    }

    const handleTemporario = event => {
        if (eventoFixo.Temporario) {
            setValue('DataInicio', ' ')
            setValue('DataFim', ' ')
        }
        else {
            setValue('DataInicio', '')
            setValue('DataFim', '')
        }
        setEventoFixo({ ...eventoFixo, Temporario: !eventoFixo.Temporario, DataFim: '', DataInicio: '' })
    }

    const handleDiaSemana = event => {
        clearErrors('DiaSemana')
     
        const updatedCheckedDia = checkedDia.map((dia, index) =>
            index === event ? !dia : dia
        )

        setCheckedDia(updatedCheckedDia)
    }

    const addEvento = (event) => {
        const usuario = JSON.parse(localStorage.getItem('usuario'))

        const dados = eventoFixo
        dados.BarbeariasId = usuario.idBarbearia
        dados.BarbeirosId = usuario.idBarbeiro

        const a = checkedDia.map((dia, index) => {
            if (dia) {
                dados.DiaSemana = options[index].value

                return RequestsClientes.postEvento(dados)
                    .then((res) => {
                        return res
                    })
            }
        })

        Promise.all(a)
            .then((res) => { setRespostaRequest(padronizaFeedbackEvento(res)) })
            .catch((res) => { console.log('cath promisse all', res) })
        // .finally((res)=>{console.log('finally')})

        setModalStatus(true)
    }

    const gerarHorarios = () => {
        const horasDia = []
        let horaString = ''

        for (let i = 0; i < 24; i++) {

            if (i < 10)
                horaString = '0' + i.toString()
            else
                horaString = i.toString()

            horasDia.push(horaString + ':00')
            horasDia.push(horaString + ':30')

        }
        setHorariosBloqueio(horasDia)
    }

    useEffect(() => {
        if (checkedDia.includes(true)) {
            setValue('DiaSemana', ' ')
        }
        else {
            setValue('DiaSemana', '')
        }
    }, [checkedDia])

    useEffect(() => {
        gerarHorarios()
        setValue('DiaSemana', '')
    }, [0])

    return (
        <CriarEventoSC>
            {
                modalStatus && <ModalRequestsEventos acao={() => navigate('/painel-barbeiro/eventos')} dados={respostaRequest} dadosHeader={eventoFixo}/>
            }

            <div className="mainContent">
                <h2>Crie eventos para bloquear sua agenda</h2>
                <form onSubmit={handleSubmit(addEvento)}>
                    <label className='labelTitle'>Nome do evento:</label>
                    <input type="text" {...register("NomeEvento")} maxLength={30} minLength={3} onChange={(e) => handleNomeEvento(e)} />
                    <p className="mensagem-erro">{errors.NomeEvento?.message}</p>

                    <label className='labelTitle'>Descrição do evento:</label>
                    <input type="text" {...register("DescricaoEvento")} name="DescricaoEvento" id="descricaoEvento" maxLength={100} onChange={(e) => handleDescricaoEvento(e)} />
                    <p className="mensagem-erro">{errors.DescricaoEvento?.message}</p>

                    {/* String "16:30" */}
                    <label className='labelTitle'>Hora início:</label>
                    <select {...register("HoraInicio")} name="HoraInicio" id="horaInicio" onChange={(e) => handleHoraInicio(e)} >
                        <option value="">Selecionar</option>
                        {horariosBloqueio.map(horario => {
                            return <option value={horario} key={'inicio' + horario}>{horario}</option>
                        })}
                    </select>
                    <p className="mensagem-erro">{errors.HoraInicio?.message}</p>

                    {/* String "16:30" */}
                    <label className='labelTitle'>Hora fim:</label>
                    <select {...register("HoraFim")} name="HoraFim" id="horaFim" onChange={(e) => handleHoraFim(e)} step="30">
                        <option value="">Selecionar</option>
                        {horariosBloqueio.map(horario => {
                            return <option value={horario} key={'fim' + horario}>{horario}</option>
                        })}
                    </select>
                    <p className="mensagem-erro">{errors.HoraFim?.message}</p>

                    <label className='labelTitle'>Dias de ocorrência:</label>
                    <div className="wrapCheckbox" >
                        {options.map((dia, index) => {
                            return <label key={dia.label} className="container">{dia.label}
                                <input type="checkbox" value={dia.value} name="" onChange={() => handleDiaSemana(index)} />
                                <span className="checkmark"></span>
                            </label>
                        })}
                    </div>
                    <p className="mensagem-erro">{errors.DiaSemana?.message}</p>

                    {eventoFixo.Temporario &&
                        <>
                            {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                            <label className='labelTitle'>Data início:</label>
                            <input type="date" {...register("DataInicio")} name="DataInicio" id="dataInicio" onChange={(e) => { handleDataInicio(e) }} />
                            <p className="mensagem-erro">{errors.DataInicio?.message}</p>

                            {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                            <label className='labelTitle'>Data fim:</label>
                            <input type="date" {...register("DataFim")} name="DataFim" id="dataFim" onChange={(e) => { handleDataFim(e) }} />
                            <p className="mensagem-erro">{errors.DataFim?.message}</p>
                        </>
                    }

                    <div className="wrapCheckbox">
                        <label className="container oneCheck">Repetir sempre.
                            <input type="checkbox" {...register("Temporario")} checked={!eventoFixo.Temporario} name="Temporario" id="checkMark" onChange={(e) => { handleTemporario(e) }} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <button type="submit">Criar</button>
                </form>
            </div>
        </CriarEventoSC >
    )
}