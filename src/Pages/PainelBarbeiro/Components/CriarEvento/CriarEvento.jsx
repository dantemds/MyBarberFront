import React from 'react'
import { useState } from 'react'
import { CriarEventoSC } from './style'
import { padronizaData } from '../../../../Utils/functions.js'
import { RequestsClientes } from '../../../.././API/RequestsCliente.js'
import { validacaoEvento } from '../../../../Validations/EventosValidation';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useEffect } from 'react';
import ModalRequestsEventos from '../../../../Components/Status/ModalRequestsEventos/ModalRequestsEventos'

export default function CriarEvento() {
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
    }

    const handleDescricaoEvento = event => {
        setEventoFixo({ ...eventoFixo, DescricaoEvento: event.target.value })
    }

    const handleHoraInicio = event => {
        setEventoFixo({ ...eventoFixo, HoraInicio: event.target.value })
    }

    const handleHoraFim = event => {
        setEventoFixo({ ...eventoFixo, HoraFim: event.target.value })
    }

    const handleDataInicio = event => {
        setEventoFixo({ ...eventoFixo, DataInicio: padronizaData(event.target.value) })
    }

    const handleDataFim = event => {
        setEventoFixo({ ...eventoFixo, DataFim: padronizaData(event.target.value) })
    }

    const handleTemporario = event => {
        setEventoFixo({ ...eventoFixo, Temporario: !eventoFixo.Temporario, DataFim: '', DataInicio: '' })
    }

    const handleDiaSemana = event => {
        // const dias = [];
        // event.forEach((item) => {
        //     dias.push(item.value);
        // });
        // setEventoFixo({ ...eventoFixo, DiaSemana: dias })

        const updatedCheckedDia = checkedDia.map((dia, index) =>
            index === event ? !dia : dia
        )

        setCheckedDia(updatedCheckedDia)
    }

    const addEvento = event => {
        event.preventDefault()
        const usuario = JSON.parse(localStorage.getItem('usuario'))

        const dados = eventoFixo
        dados.BarbeariasId = usuario.idBarbearia
        dados.BarbeirosId = usuario.idBarbeiro
        let listaRes = []

        checkedDia.map((dia, index) => {
            if (dia) {
                dados.DiaSemana = options[index].value
                
                setTimeout(() => {
                    RequestsClientes.postEvento(dados)
                        .then((res) => {
                            if (res) {
                                listaRes.push({ dia: options[index].label, status: 'Sucesso' })
                            } else {
                                listaRes.push({ dia: options[index].label, status: 'Falha' })

                            }
                        })
                        .finally(() => { setRespostaRequest(listaRes); console.log(listaRes) })

                    setModalStatus(true)
                }, 500)
            }
        })
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
        gerarHorarios()
    }, [0])

    return (
        <CriarEventoSC>
            {
                modalStatus && <ModalRequestsEventos acao={() => setModalStatus(false)} dados={respostaRequest} />
            }

            <div className="mainContent">
                <h2>Crie eventos para bloquear sua agenda</h2>
                <form onSubmit={addEvento}>
                    <label className='labelTitle'>Nome do evento:</label>
                    <input type="text" maxLength={30} minLength={3} onChange={(e) => handleNomeEvento(e)} />

                    <label className='labelTitle'>Descrição do evento:</label>
                    <input type="text" name="descricaoEvento" id="descricaoEvento" maxLength={100} onChange={(e) => handleDescricaoEvento(e)} />

                    {/* String "16:30" */}
                    <label className='labelTitle'>Hora início:</label>
                    <select name="" id="horaInicio" onChange={(e) => handleHoraInicio(e)} >
                        <option value="">Selecionar</option>
                        {horariosBloqueio.map(horario => {
                            return <option value={horario} key={'inicio' + horario}>{horario}</option>
                        })}
                    </select>

                    {/* String "16:30" */}
                    <label className='labelTitle'>Hora fim:</label>
                    <select name="" id="horaFim" onChange={(e) => handleHoraFim(e)} step="30">
                        <option value="">Selecionar</option>
                        {horariosBloqueio.map(horario => {
                            return <option value={horario} key={'fim' + horario}>{horario}</option>
                        })}
                    </select>

                    <label className='labelTitle'>Dias de ocorrência:</label>
                    <div className="wrapCheckbox">
                        {options.map((dia, index) => {
                            return <label key={dia.label} className="container">{dia.label}
                                <input type="checkbox" value={dia.value} name="diasSemana" onChange={() => handleDiaSemana(index)} />
                                <span className="checkmark"></span>
                            </label>
                        })}
                    </div>

                    {eventoFixo.Temporario &&
                        <>
                            {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                            <label className='labelTitle'>Data início:</label>
                            <input type="date" name="" id="dataInicio" onChange={(e) => { handleDataInicio(e) }} />

                            {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                            <label className='labelTitle'>Data fim:</label>
                            <input type="date" name="" id="dataFim" onChange={(e) => { handleDataFim(e) }} />
                        </>
                    }

                    <div className="wrapCheckbox">
                        <label className="container oneCheck">Repetir sempre.
                            <input type="checkbox" checked={!eventoFixo.Temporario} name="" id="checkMark" onChange={(e) => { handleTemporario(e) }} />
                            <span className="checkmark"></span>
                        </label>
                    </div>

                    <button type="submit">Criar</button>
                </form>
            </div>
        </CriarEventoSC >
    )
}