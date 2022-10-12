import React from 'react'
import { Link } from 'react-router-dom'

import { Apresentacao } from './style'

import { ServicoContext } from '../../Contexts/ServicoContext'

import { BsInstagram, BsWhatsapp, BsTelephone } from 'react-icons/bs'


export default function ApresentacaoView() {

  const { setServicoSelecionado } = React.useContext(ServicoContext)
  const barbeariaAll = JSON.parse(window.localStorage.getItem('barbeariaAll'))

  return (
    <Apresentacao id='Apresentacao'>
        <div>
            
            <div>
                <h1>{barbeariaAll.nomeBarbearia}</h1>
            </div>

            <div className='Wrap-Medias-Sociais'>
              <a href=""><BsInstagram/></a>
              <a href=""><BsWhatsapp/></a>
              <a href=""><BsTelephone/></a>
            </div>

            <div className='Wrap-btn-agendar'>
                <Link to='/forms-agendamento' id='btn-agendar' onClick={()=>setServicoSelecionado(null)}><span>Agendar</span></Link>
            </div>

        </div>
    </Apresentacao>
  )
}
