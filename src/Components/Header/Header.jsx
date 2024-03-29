import React, { useState } from 'react'
import { HeaderSC } from './style'

import Logo from '../../Images/Logo/Logo.png'
import { Link } from 'react-router-dom'
import { MenuModel } from '../../Models/MenuModel'
import { lockScroll, unlockScroll } from '../../Utils/functions'
import { useEffect } from 'react'

export default function Header(props) {

  const rotaBarbearia = localStorage.getItem('rota-barbearia')

  const [estadoMenu, setEstadoMenu] = useState(false)

  const linksMenu = props.linkMenuDados

  const EncerrarSessao = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  useEffect(() => {
    if (estadoMenu)
      lockScroll()
    else
      unlockScroll()
  }, [estadoMenu])

  return (
    <HeaderSC menu={estadoMenu ? new MenuModel() : ''}>

      <Link className="Cabecalho-Logo" to={`/${rotaBarbearia ? rotaBarbearia : '/'}`}><img src={Logo} alt="Logo"></img></Link>

      <nav>

        <button onClick={() => setEstadoMenu(!estadoMenu)}>
          <div></div>
        </button>

        <ul>
          {linksMenu.map(link => {
            if (link[0] === 'Sair') // Para adicionar a função de encerrar sessão ao link
              return <li key={link[1]} onClick={() => EncerrarSessao()}>
                <a href={''}>
                  {link[0]}
                </a>
              </li>
            else if (link[0] === 'Agendar') // Para adicionar função de redirect com react-router-dom
              return <li key={link[1]}>
                <Link to={link[1]}>
                  {link[0]}
                </Link>
              </li>
            else // Para itens de scroll na mesma página
              return <li key={link[1]}> 
                <a href={link[1]}>
                  {link[0]}
                </a>
              </li>
          })}
        </ul>
      </nav>
      <div className={estadoMenu ? "background-pelicula" : "background-pelicula-hide"}></div>
    </HeaderSC>
  )
}
