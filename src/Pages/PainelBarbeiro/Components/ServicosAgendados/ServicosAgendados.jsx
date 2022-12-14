import React, { useEffect, useState } from 'react'
import { ServicosAgendadosSC } from './style'
import { DetalhesAgendamentoProvider } from '../../../../Contexts/DetalhesAgendamentoContext'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import Agenda from '../Agenda/Agenda'
import useDate from '../../../../Hooks/useDate'
import PermisssionGate from '../../../../Validations/PermissionGate'

export default function ServicosAgendados() {

  const dataAtual = useDate()
  const [dataSelecionada, setDataSelecionada] = useState(dataAtual)
  const [barbeiroSelecionado, setBarbeiroSelecionado] = useState('')
  const [exibirBarbeiro, setExibirBarbeiro] = useState(false)
  const [listaAgendamentos, setListaAgendamentos] = useState([])
  const [listaBarbeiros, setListaBarbeiros] = useState([])

  const usuario = JSON.parse(localStorage.getItem('usuario'))

  useEffect(() => {
    setBarbeiroSelecionado(JSON.parse(localStorage.getItem('usuario')).idBarbeiro)

    RequestsClientes.getBarbeiros(usuario.idBarbearia)
      .then(res => {
        setListaBarbeiros(res)
        setExibirBarbeiro(true)
      })
  }, [0])

  useEffect(() => {
    if (barbeiroSelecionado)
      getAgendamentos()

  }, [dataSelecionada, barbeiroSelecionado])


  /* ----------------------------------------------------------------------------------------------------------------------- */
  const getAgendamentos = () => {
    RequestsClientes.getAgendamentosBarbeiro(usuario.idBarbearia, barbeiroSelecionado, dataSelecionada)
      .then(res => {
        setListaAgendamentos(res)
        // console.log('LOG: Agendamentos recebidos com sucesso.')
      })
      .catch(() => console.log('LOG: Falha, agendamentos não foram recebidos.'))
  }

  /* ----------------------------------------------------------------------------------------------------------------------- */
  const listarBarbeiros = () => {
    return listaBarbeiros.map(barbeiro => {
      return <option
        key={`${barbeiro.idBarbeiro}${barbeiro.nameBarbeiro}`}
        value={barbeiro.idBarbeiro}>{barbeiro.nameBarbeiro}
      </option>
    })
  }

  /* ----------------------------------------------------------------------------------------------------------------------- */
  const handleBarbeiro = event => {
    setBarbeiroSelecionado(event.target.value)
  }


  return (
    <ServicosAgendadosSC>
      <h2>Agendamentos do dia</h2>

      <input type="date" value={dataSelecionada} onChange={event => setDataSelecionada(event.target.value)} />

      {
        exibirBarbeiro &&
        <PermisssionGate
          permissions={[
            'Supervisor'
          ]}
          user={{ permissions: usuario.role }}
        >
          <select
            onChange={handleBarbeiro}
            defaultValue={usuario.idBarbeiro}
          >
            {listarBarbeiros()}
          </select>
        </PermisssionGate>
      }

      <button
        className='btn-refresh'
        onClick={getAgendamentos}
      >
        Atualizar
      </button>

      <PermisssionGate
        permissions={[
          'Supervisor',
          'Barbeiro'
        ]}
        user={{ permissions: usuario.role }}
      >
        <DetalhesAgendamentoProvider>
          <header>
            <div>Hora</div>
            <div>Cliente</div>
            <div>Serviço</div>
          </header>
          <Agenda factory='agendamento' listaAgendamentos={listaAgendamentos} />
        </DetalhesAgendamentoProvider>
      </PermisssionGate>

    </ServicosAgendadosSC>
  )
}
