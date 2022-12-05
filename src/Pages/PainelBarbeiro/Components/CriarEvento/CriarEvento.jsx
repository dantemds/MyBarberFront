import React from 'react'
import { useState } from 'react'

import { CriarEventoSC } from './style'

export default function CriarEvento() {

    const [eventoFixo, setEventoFixo] = useState({
        NomeEvento: '',
        DescricaoEvento: '',
        HoraInicio: '',
        HoraFim: '',
        DiaSemana: '',
        BarbeariasId: '',
        BarbeirosId: ''
    })

    const handleNomeEvento = event => {
        setEventoFixo([{...eventoFixo, NomeEvento: event.target.value}])
    }

    const handleDescricaoEvento = event => {
        setEventoFixo([{...eventoFixo, DescricaoEvento: event.target.value}])
    }

    const handleHoraInicio = event => {
        setEventoFixo([{...eventoFixo, HoraInicio: event.target.value}])
    }

    const handleHoraFim = event => {
        setEventoFixo([{...eventoFixo, HoraFim: event.target.value}])
    }

    const handleDiaSemana= event => {
        setEventoFixo({...eventoFixo, DiaSemana: event.target.value})
    }

    const addEvento = event => {
        event.preventDefault()
        console.log('Post')
        console.log(eventoFixo)
    }

    return (
        <CriarEventoSC>
            <div className="mainContent">
                <form onSubmit={addEvento}>
                    <input type="text" placeholder='Nome do evento' onChange={()=>handleNomeEvento()}/>
                    <input type="text" name="" id="" placeholder='Descrição do evento' onChange={()=>handleDescricaoEvento}/>
                    <input type="time" name="" id="" onChange={()=>handleHoraInicio()}/>
                    <input type="time" name="" id="" onChange={()=>handleHoraFim()}/>
                    {/* <input type="checkbox" name="" id=""  onChange={()=>}/> */}
                    <label >Repetir sempre.</label>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </CriarEventoSC>
    )
}
