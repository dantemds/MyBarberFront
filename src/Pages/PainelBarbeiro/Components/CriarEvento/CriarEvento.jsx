import React from 'react'
import { useState } from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import { CriarEventoSC } from './style'
import foto from './images.png'
import {padronizaData} from '../../../../Utils/functions.js'
import {RequestsClientes} from '../../../.././API/RequestsCliente.js'

export default function CriarEvento() {

    const [eventoFixo, setEventoFixo] = useState({
        NomeEvento: '',
        DescricaoEvento: '',
        HoraInicio: '',
        HoraFim: '',
        DiaSemana: '',
        BarbeariasId: '',
        BarbeirosId: '',
        DataInicio:'',
        DataFim:'',
        Temporario: true,
        
    });


    const handleNomeEvento = event => {
        setEventoFixo({...eventoFixo, NomeEvento: event.target.value})
    }

    const handleDescricaoEvento = event => {
        setEventoFixo({...eventoFixo, DescricaoEvento: event.target.value})
    }

    const handleHoraInicio = event => {
        setEventoFixo({...eventoFixo, HoraInicio: event.target.value})
    }

    const handleHoraFim = event => {
        setEventoFixo({...eventoFixo, HoraFim: event.target.value})
    }

    const handleDataInicio = event => {
        setEventoFixo({...eventoFixo, DataInicio: padronizaData(event.target.value)})
    }

    const handleDataFim = event => {
        setEventoFixo({...eventoFixo, DataFim: padronizaData(event.target.value)})
    }

    const handleTemporario = event => {
        setEventoFixo({...eventoFixo, Temporario: !eventoFixo.Temporario, DataFim:'', DataInicio:''})
    }

    const handleDiaSemana = event => {
        const dias = [];
        event.forEach((item) => {
            dias.push(item.value);
        });
        setEventoFixo({...eventoFixo, DiaSemana: dias})
    }


    const addEvento = event => {
        event.preventDefault()
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        if(eventoFixo.DiaSemana.length == 1){
            console.log(eventoFixo)
            const dados = eventoFixo;
            dados.DiaSemana = eventoFixo.DiaSemana[0];
            dados.BarbeariasId = usuario.idBarbearia;
            dados.BarbeirosId = usuario.idBarbeiro;
            console.log(dados)
            RequestsClientes.postEvento(dados);
        }
    }

    const options = [
        { value: 'domingo', label: 'Domingo' },
        { value: 'segunda', label: 'Segunda-Feira' },
        { value: 'terca', label: 'Terça-Feira' },
        { value: 'quarta', label: 'Quarta-Feira' },
        { value: 'quinta', label: 'Quinta-Feira' },
        { value: 'sexta', label: 'Sexta-Feira' },
        { value: 'sabado', label: 'Sábado' },
      ]

      const animatedComponents = makeAnimated();

    return (
        <CriarEventoSC>
           
            <div className="mainContent">
            <div>
                <img src={foto} alt="Logo" />
            </div>
                <form onSubmit={addEvento}>
                    <input type="text" placeholder='Nome do evento' onChange={(e)=>handleNomeEvento(e)}/>
                    <input type="text" name="" id="" placeholder='Descrição do evento' onChange={(e)=>handleDescricaoEvento(e)}/>
                    {/* String "16:30" */}
                    <input type="time" name="" id="horaInicio" onChange={(e)=>handleHoraInicio(e)}/>
                    {/* String "16:30" */}
                    <input type="time" name="" id="horaFim" onChange={(e)=>handleHoraFim(e)}/> 
                    <Select options={options} isMulti className="basic-multi-select" classNamePrefix="select"  components={animatedComponents} onChange={(e)=>{handleDiaSemana(e)}}/>
                    {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                    <input type={eventoFixo.Temporario ? "date" : "hidden"} name="" id="dataInicio" onChange={(e)=>{handleDataInicio(e)}}/> 
                    {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                    <input type={eventoFixo.Temporario ? "date" : "hidden"} visible={eventoFixo.Temporario} name="" id="dataFim" onChange={(e)=>{handleDataFim(e)}}/>
                    <span>
                        <input type="checkbox" checked={!eventoFixo.Temporario} name="" id=""  onChange={(e)=>{handleTemporario(e)}}/>
                        <label>Repetir sempre.</label>
                    </span>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </CriarEventoSC>
    )
}
