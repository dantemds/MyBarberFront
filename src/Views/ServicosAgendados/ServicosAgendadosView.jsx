import React, { useEffect, useState } from 'react'
import AgendaConstroller from '../../Controllers/AgendaController'
import { ServicosAgendados } from './style'
import { DetalhesAgendamentoProvider } from '../../Contexts/DetalhesAgendamentoContext'
import useDate from "../../Hooks/useDate"
import { RequestsClientes } from '../../API/RequestsCliente'


export default function ServicosAgendadosView() {

  const dataAtual = useDate()
  const [dataSelecionada, setDataSelecionada] = useState(dataAtual)
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('')
  const [listaAgendamentos, setListaAgendamentos] = useState([])

  useEffect(() => {
    setBarbeiroSelecionado(JSON.parse(window.localStorage.getItem('usuario')))
  }, [0])

  useEffect(() => {

    RequestsClientes.getAgendamentosBarbeiro(barbeiroSelecionado.idBarbeiro, dataSelecionada)
      .then(res => {
        setListaAgendamentos(res)
        console.log('LOG: Agendamentos recebidos com sucesso.')
      })
      .catch(() => console.log('LOG: Falha, agendamentos não foram recebidos.'))

  }, [dataSelecionada, barbeiroSelecionado])


  return (
    <ServicosAgendados>
      <h2>Agendamentos do dia</h2>

      <input type="date" value={dataSelecionada} onChange={event => setDataSelecionada(event.target.value)} />

      <select disabled>
        <option value={barbeiroSelecionado.idBarbeiro}>{barbeiroSelecionado.nomeUsuario}</option>
      </select>

      <DetalhesAgendamentoProvider>
        <AgendaConstroller listaAgendamentos={listaAgendamentos} />
      </DetalhesAgendamentoProvider>

    </ServicosAgendados>
  )
}
