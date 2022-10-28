import React, { useEffect, useState } from 'react'
import { ServicosAgendadosSC } from './style'
import { DetalhesAgendamentoProvider } from '../../../../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import Agenda from '../Agenda/Agenda'
import useDate from '../../../../Hooks/useDate'

export default function ServicosAgendados() {

  const dataAtual = useDate()
  const [dataSelecionada, setDataSelecionada] = useState(dataAtual)
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('')
  const [listaAgendamentos, setListaAgendamentos] = useState([])

  const usuario = JSON.parse(localStorage.getItem('usuario'))

  useEffect(() => {
    setBarbeiroSelecionado(JSON.parse(window.localStorage.getItem('usuario')))
  }, [0])

  useEffect(() => {

    RequestsClientes.getAgendamentosBarbeiro(usuario.idBarbearia, usuario.idBarbeiro, dataSelecionada)
      .then(res => {
        setListaAgendamentos(res)
        console.log('LOG: Agendamentos recebidos com sucesso.')
      })
      .catch(() => console.log('LOG: Falha, agendamentos não foram recebidos.'))

  }, [dataSelecionada, barbeiroSelecionado])


  return (
    <ServicosAgendadosSC>
      <h2>Agendamentos do dia</h2>

      <input type="date" value={dataSelecionada} onChange={event => setDataSelecionada(event.target.value)} />

      <select disabled>
        <option value={usuario.idBarbeiro}>{usuario.nomeUsuario}</option>
      </select>

      <DetalhesAgendamentoProvider>
        <Agenda listaAgendamentos={listaAgendamentos} />
      </DetalhesAgendamentoProvider>

    </ServicosAgendadosSC>
  )
}
