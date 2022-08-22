import React from 'react'
import { Link } from 'react-router-dom'

import { Apresentacao } from './style'

import { ServicoContext } from '../../Contexts/ServicoContext'


export default function ApresentacaoView() {

  const { setServicoSelecionado } = React.useContext(ServicoContext)
  const barbeariaAll = JSON.parse(window.localStorage.getItem('barbeariaAll'))

  return (
    <Apresentacao id='Apresentacao'>
        <div>
            
            <div>
                <h1>{barbeariaAll.nomeBarbearia}</h1>
            </div>

            <div>
                <Link to='/forms-agendamento' id='btn-agendar' onClick={()=>setServicoSelecionado(null)}><span>Agendar</span></Link>
            </div>

        </div>
    </Apresentacao>
  )
}
