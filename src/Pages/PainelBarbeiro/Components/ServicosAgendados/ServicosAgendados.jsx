import React, { useEffect, useState } from 'react'
import { ServicosAgendadosSC } from './style'
import { DetalhesAgendamentoProvider } from '../../../../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import Agenda from '../Agenda/Agenda'
import useDate from '../../../../Hooks/useDate'
import { GlobalContext } from '../../../../Contexts/GlobalContext'


export default function ServicosAgendados() {

  const dataAtual = useDate()
  const [dataSelecionada, setDataSelecionada] = useState(dataAtual)
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('')
  const [listaAgendamentos, setListaAgendamentos] = useState([])

  const { dadosTenantBarbearia } = React.useContext(GlobalContext)



  useEffect(() => {
    setBarbeiroSelecionado(JSON.parse(window.localStorage.getItem('usuario')))
  }, [0])

  useEffect(() => {

    RequestsClientes.getAgendamentosBarbeiro(dadosTenantBarbearia.idBarbearia, barbeiroSelecionado.idBarbeiro, dataSelecionada)
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
        <option value={barbeiroSelecionado.idBarbeiro}>{barbeiroSelecionado.nomeUsuario}</option>
      </select>

      <DetalhesAgendamentoProvider>
        <Agenda listaAgendamentos={listaAgendamentos} />
      </DetalhesAgendamentoProvider>

    </ServicosAgendadosSC>
  )
}
