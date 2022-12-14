import {EventosMarcadosSC} from "./style";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import Agenda from "../Agenda/Agenda";
import {useEffect, useState} from "react";
import {RequestsClientes} from "../../../../API/RequestsCliente";
import { DetalhesAgendamentoProvider } from '../../../../Contexts/DetalhesAgendamentoContext'
export default function EventosMarcados() {

    const [listaEventos, setListaEventos] = useState([])
    const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('')
    const [load, setLoad] = useState(false);
    const [diaSelecionado, setDiaSelecionado] = useState('segunda');

    const options = [
        { value: 'domingo', label: 'Domingo' },
        { value: 'segunda', label: 'Segunda-Feira' },
        { value: 'terca', label: 'Terça-Feira' },
        { value: 'quarta', label: 'Quarta-Feira' },
        { value: 'quinta', label: 'Quinta-Feira' },
        { value: 'sexta', label: 'Sexta-Feira' },
        { value: 'sabado', label: 'Sábado' },
      ]

      useEffect(()=>{
        if(listaEventos){
            setLoad(true);

        }
      }, [listaEventos])

      useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        setBarbeiroSelecionado(usuario.idBarbeiro);
        
        RequestsClientes.getEventosBarbeiro(usuario.idBarbeiro)
          .then(res => {
            const filtro = res.filter(option=> option.diaSemana == diaSelecionado);
            setListaEventos(filtro);
          })
          .catch(() => console.log('LOG: Falha, eventos não foram recebidos.'));

      }, [0]);

      useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem('usuario'));
        setBarbeiroSelecionado(usuario.idBarbeiro);
        
        RequestsClientes.getEventosBarbeiro(usuario.idBarbeiro)
          .then(res => {
            console.log('re', res);
            const filtro = res.filter(option=> option.diaSemana == diaSelecionado);
            console.log('fil',filtro)
            setListaEventos(filtro);
          })
          .catch(() => console.log('LOG: Falha, eventos não foram recebidos.'));

      }, [diaSelecionado]);

      const handleDiaSemana = event => {
        setDiaSelecionado(event.value);
    }
    
      
    const animatedComponents = makeAnimated();
    return(
        <EventosMarcadosSC>
            
            <h2>Eventos Marcadas</h2>

            <Select options={options} value = {
       options.filter(option => 
          option.value === diaSelecionado)
    } className="basic-multi-select" classNamePrefix="select" id='selectDia' components={animatedComponents} onChange={(e)=>{handleDiaSemana(e)}}/>
      <DetalhesAgendamentoProvider>
            <header>
            <div>Hora Início</div>
            <div>Hora Fim</div>
            <div>Temporario</div>
          </header>
         {load && <Agenda factory='evento' listaAgendamentos={listaEventos}/>}
         </DetalhesAgendamentoProvider>

        </EventosMarcadosSC>
    )
}