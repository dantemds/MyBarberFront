import React from 'react'
import {useState} from 'react'
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import {CriarEventoSC} from './style'
import {padronizaData} from '../../../../Utils/functions.js'
import {RequestsClientes} from '../../../.././API/RequestsCliente.js'
import {validacaoEvento} from '../../../../Validations/EventosValidation';
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import { InputTime } from '../../../../Components/Elementar/InputTime';

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


    const { register, handleSubmit, formState: { errors }, setValue, getValues, clearErrors } = useForm({
        resolver: yupResolver(validacaoEvento)
    })


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
            RequestsClientes.postEvento(dados)
                .then((res) => {
                    if (res) {
                        console.log('deu certo');
                    } else {
                        console.log('deu ruim');
                    }
                })
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
                <h2>Crie eventos para bloquear sua agenda</h2>
                <form onSubmit={addEvento}>
                    <input type="text" placeholder='Nome do evento' maxLength={30} minLength={3} onChange={(e)=>handleNomeEvento(e)}/>
                    <input type="text" name="descricaoEvento" id="descricaoEvento" placeholder='Descrição do evento' maxLength={100} onChange={(e)=>handleDescricaoEvento(e)}/>
                    {/* <input list="horaInicio" name="horaInicio" id="horaInicio_input"/> */}
                    {/* String "16:30" */}
                    <select name="" id="horaInicio"  onChange={(e)=>handleHoraInicio(e)} >
                    <option>00:00</option>
                    <option>00:30</option>
                    <option>01:00</option>
                    <option>01:30</option>
                    <option>02:00</option>
                    <option>02:30</option>
                    <option>03:00</option>
                    <option>03:30</option>
                    <option>04:00</option>
                    <option>04:30</option>
                    <option>05:00</option>
                    <option>05:30</option>
                    <option>06:00</option>
                    <option>06:30</option>
                    <option>07:00</option>
                    <option>07:30</option>
                    <option>08:00</option>
                    <option>08:30</option>
                    <option>09:00</option>
                    <option>09:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                    <option>21:30</option>
                    <option>22:00</option>
                    <option>22:30</option>
                    <option>23:00</option>
                    <option>23:30</option>
                    </select>

                    {/* String "16:30" */}
                    <select name="" id="horaFim" onChange={(e)=>handleHoraFim(e)} >
                    <option>00:00</option>
                    <option>00:30</option>
                    <option>01:00</option>
                    <option>01:30</option>
                    <option>02:00</option>
                    <option>02:30</option>
                    <option>03:00</option>
                    <option>03:30</option>
                    <option>04:00</option>
                    <option>04:30</option>
                    <option>05:00</option>
                    <option>05:30</option>
                    <option>06:00</option>
                    <option>06:30</option>
                    <option>07:00</option>
                    <option>07:30</option>
                    <option>08:00</option>
                    <option>08:30</option>
                    <option>09:00</option>
                    <option>09:30</option>
                    <option>10:00</option>
                    <option>10:30</option>
                    <option>11:00</option>
                    <option>11:30</option>
                    <option>12:00</option>
                    <option>12:30</option>
                    <option>13:00</option>
                    <option>13:30</option>
                    <option>14:00</option>
                    <option>14:30</option>
                    <option>15:00</option>
                    <option>15:30</option>
                    <option>16:00</option>
                    <option>16:30</option>
                    <option>17:00</option>
                    <option>17:30</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                    <option>21:30</option>
                    <option>22:00</option>
                    <option>22:30</option>
                    <option>23:00</option>
                    <option>23:30</option>
                    </select>
                    
                    <Select options={options} isMulti className="basic-multi-select" classNamePrefix="select" id='selectDia' components={animatedComponents} onChange={(e)=>{handleDiaSemana(e)}}/>
                    {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                    <input type={eventoFixo.Temporario ? "date" : "hidden"} name="" id="dataInicio" onChange={(e)=>{handleDataInicio(e)}}/> 
                    {/* //String Data "07/12/2022" dd/mm/yyyy*/}
                    <input type={eventoFixo.Temporario ? "date" : "hidden"} visible={eventoFixo.Temporario} name="" id="dataFim" onChange={(e)=>{handleDataFim(e)}}/>
                    <div className='check'>
                        <input type="checkbox" checked={!eventoFixo.Temporario} name="" id=""  onChange={(e)=>{handleTemporario(e)}}/>
                        <label>Repetir sempre.</label>
                    </div>
                    <button type="submit">Criar</button>
                </form>
            </div>
        </CriarEventoSC>
    )
}
