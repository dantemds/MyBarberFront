import React, { useState } from 'react'
import { HeaderSC } from './style'

import Logo from '../../Images/Logo/Logo.png'
import { Link } from 'react-router-dom'
import { MenuModel } from '../../Models/MenuModel'

export default function Header(props) {

  const rotaBarbearia = localStorage.getItem('rota-barbearia')

  const [estadoMenu, setEstadoMenu] = useState(false)

  const linksMenu = props.linkMenuDados

  const EncerrarSessao = () => {
    window.localStorage.clear()
    window.location.reload()
  }

  return (
    <HeaderSC menu={estadoMenu ? new MenuModel() : ''}>

      <Link className="Cabecalho-Logo" to={`/${rotaBarbearia ? rotaBarbearia : '/'}`}><img src={Logo} alt="Logo"></img></Link>

      <nav>

        <button onClick={() => setEstadoMenu(!estadoMenu)}>
          <div></div>
        </button>

        <ul>
          {linksMenu.map(link => {
            if (link[0] === 'Sair')
              return <li key={link[1]} onClick={() => EncerrarSessao()}>
                <a href={link[1]}>
                  {link[0]}
                </a>
              </li>
            else
              return <li key={link[1]}>
                <a href={link[1]}>
                  {link[0]}
                </a>
              </li>
          })}
        </ul>
      </nav>
    </HeaderSC>
  )
}
