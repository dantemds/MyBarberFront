import React, { useEffect } from 'react'
import { useState } from 'react'

import { BsArrowRightCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import CardServico from '../CardServico/CardServico'

import { ServicosSC } from './style'

export default function Servicos() {
  const { dadosTenantBarbearia } = React.useContext(GlobalContext)

  const [servicos, setServicos] = useState()

  let contador = 0

  useEffect(() => {
    setServicos(dadosTenantBarbearia.servicos)
  }, [0])

  return (
    <ServicosSC id='Servico'>
      <h1>Serviços mais utilizados</h1>

      <div>
        <ul>
          {
            servicos &&
            servicos.map(servico => {
              contador++
              if (contador <= 4)
                return <CardServico key={servico.idServico} dadosServico={servico} />
            })
          }
        </ul>

        <Link to='/forms-agendamento' className='Wrap-mais-servicos'>
          <a href="">Ver mais serviços</a>
          <BsArrowRightCircle />
        </Link>
      </div>

    </ServicosSC>
  )
}
