import React from 'react'
import { Link } from 'react-router-dom'

import { ApresentacaoSC } from './style'

import { ServicoContext } from '../../Contexts/ServicoContext'

import { BsInstagram, BsWhatsapp, BsTelephone } from 'react-icons/bs'
import { useLocalStorage } from '../../Hooks/useLocalStorage'


export default function Apresentacao() {

  const { setServicoSelecionado } = React.useContext(ServicoContext)
  const barbeariaAll = JSON.parse(window.localStorage.getItem('barbeariaAll'))

  const bannerDesktop = barbeariaAll.banner.find(banner => banner.mobile === false)
  const bannerMobile = barbeariaAll.banner.find(banner => banner.mobile === true)

  const dominio = "https://minha-barbearia.online/"

  const getUrlBanner = banner => {
    if (banner)
      return dominio + banner.url
    else
      return ""
  }

  
  const [teste, setTeste] = useLocalStorage("KeyTeste", 5)

  console.log(teste)

  

  return (
    <ApresentacaoSC
      id='Apresentacao'
      urlBannerDesktop={getUrlBanner(bannerDesktop)}
      urlBannerMobile={getUrlBanner(bannerMobile)}
    >
      <div>

        <div>
          <h1>{barbeariaAll.nomeBarbearia}</h1>
        </div>

        <div className='Wrap-Medias-Sociais'>
          <a href=""><BsInstagram /></a>
          <a href=""><BsWhatsapp /></a>
          <a href=""><BsTelephone /></a>
        </div>

        <div className='Wrap-btn-agendar'>
          <Link to='/forms-agendamento' id='btn-agendar' onClick={() => setServicoSelecionado(null)}><span>Agendar</span></Link>
        </div>

      </div>
    </ApresentacaoSC>
  )
}
