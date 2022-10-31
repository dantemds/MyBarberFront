import React from 'react'
import { Link } from 'react-router-dom'

import { ApresentacaoSC } from './style'

import { BsInstagram, BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { findBanner, getUrImagem } from '../../../../Utils/functions'

export default function Apresentacao() {

  const { dadosTenantBarbearia, setServicoSelecionado } = React.useContext(GlobalContext)

  const bannerDesktop = findBanner(dadosTenantBarbearia.banner, false)
  const bannerMobile = findBanner(dadosTenantBarbearia.banner, true)


  return (
    <ApresentacaoSC
      id='Apresentacao'
      urlBannerDesktop={getUrImagem(bannerDesktop)}
      urlBannerMobile={getUrImagem(bannerMobile)}>

      <div>
        <div>
          <h1>{dadosTenantBarbearia.nomeBarbearia}</h1>
        </div>

        {
          dadosTenantBarbearia.contatos &&
          <div className='Wrap-Medias-Sociais'>
            <a href={`https://www.instagram.com/${dadosTenantBarbearia.contatos.instagrams[0]}`} target="_blank"><BsInstagram /></a>
            <a href={`https://api.whatsapp.com/send?phone=${dadosTenantBarbearia.contatos.celulares[0].replace(" ", "")}`} target="_blank"><BsWhatsapp /></a>
            <a href={`tel:${dadosTenantBarbearia.contatos.telefones[0]}`} target="_blank"><BsTelephone /></a>
          </div>
        }

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
