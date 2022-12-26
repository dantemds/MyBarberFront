import { EventosMarcadosSC } from "./style";
import Agenda from "../Agenda/Agenda";
import { useEffect, useState } from "react";
import { RequestsClientes } from "../../../../API/RequestsCliente";
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

  useEffect(() => {
    if (listaEventos) {
      setLoad(true);

    }
  }, [listaEventos])

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));
    setBarbeiroSelecionado(usuario.idBarbeiro);

    window.scroll({
      top: 0,
      behavior: 'smooth'
    })

    RequestsClientes.getEventosBarbeiro(usuario.idBarbeiro)
      .then(res => {
        const filtro = res.filter(option => option.diaSemana == diaSelecionado);
        setListaEventos(filtro);
      })
      .catch(() => console.log('LOG: Falha, eventos não foram recebidos.'));

  }, [0]);

  useEffect(() => {
    const usuario = JSON.parse(localStorage.getItem('usuario'));

    setBarbeiroSelecionado(usuario.idBarbeiro);

    RequestsClientes.getEventosBarbeiro(usuario.idBarbeiro)
      .then(res => {
        const filtro = res.filter(option => option.diaSemana == diaSelecionado);
        setListaEventos(filtro);
      })
      .catch(() => console.log('LOG: Falha, eventos não foram recebidos.'));

  }, [diaSelecionado]);

  const handleDiaSemana = event => {
    setDiaSelecionado(event.target.value);
  }

  return (
    <EventosMarcadosSC>

      <h2>Eventos Marcados</h2>

      <select
        name=""
        id=""
        className="selectDia"
        onChange={handleDiaSemana}
        value={diaSelecionado}
      >
        {
          options.map((dia, index) => {
            return <option value={dia.value} key={dia.value + index}>{dia.label}</option>
          })
        }
      </select>

      <DetalhesAgendamentoProvider>
        <header>
          <div>Hora Início</div>
          <div>Hora Fim</div>
          <div>Temporario</div>
        </header>
        {load && <Agenda factory='evento' listaAgendamentos={listaEventos} />}
      </DetalhesAgendamentoProvider>

    </EventosMarcadosSC>
  )
}