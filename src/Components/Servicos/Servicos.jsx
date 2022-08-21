import React, { useEffect } from 'react'
import { useState } from 'react'
import CardServicoController from '../../Controllers/CardServicoController'

import { ServicosSC } from './style'

export default function Servicos() {
  const dadosBarbearia = window.localStorage.getItem('barbeariaAll')
  const [servicos, setServicos] = useState()

  let contador = 0

  useEffect(() => {
    setServicos(JSON.parse(dadosBarbearia).servicos)
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
              if (contador <= 6)
                return <CardServicoController key={servico.idServico} dadosServico={servico} />
            })
          }
        </ul>
      </div>

    </ServicosSC>
  )
}
