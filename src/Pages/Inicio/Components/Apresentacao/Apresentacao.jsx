import React from 'react'
import { Link } from 'react-router-dom'

import { ApresentacaoSC } from './style'

import { BsInstagram, BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { findBanner, getUrlBanner } from '../../../../Utils/functions'

export default function Apresentacao() {

  const { dadosTenantBarbearia, setServicoSelecionado } = React.useContext(GlobalContext)

  const bannerDesktop = findBanner(dadosTenantBarbearia.banner, false)
  const bannerMobile = findBanner(dadosTenantBarbearia.banner, true)

  return (
    <ApresentacaoSC
      id='Apresentacao'
      urlBannerDesktop={getUrlBanner(bannerDesktop)}
      urlBannerMobile={getUrlBanner(bannerMobile)}>
      <div>
        <div>
          <h1>{dadosTenantBarbearia.nomeBarbearia}</h1>
        </div>

        <div className='Wrap-Medias-Sociais'>
          <a href=""><BsInstagram /></a>
          <a href=""><BsWhatsapp /></a>
          <a href=""><BsTelephone /></a>
        </div>

        <div className='Wrap-btn-agendar'>
          <Link
            to='/forms-agendamento'
            id='btn-agendar'
            // onClick={() => setServicoSelecionado(null)}>
            >
            <span>Agendar</span>
          </Link>
        </div>
      </div>
    </ApresentacaoSC>
  )
}
