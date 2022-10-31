import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RequestsClientes } from '../../../../API/RequestsCliente'
import { AutenticaxaoSC } from './style'

export default function Autenticacao() {
    const [credencial, setCredencial] = useState({ email: '', password: '' })
    const [autenticacaoFalhou, setAutenticacaoFalhou] = useState(false)

    const navigate = useNavigate()

    const logar = event => {
        event.preventDefault()

        RequestsClientes.postAutenticacao(credencial)
            .then(res => {

                if (res) {
                    // const encryptor = require('simple-encryptor')(process.env.REACT_APP_ENCRYPTOR_KEY)
                    // localStorage.setItem('usuario', encryptor.encrypt(JSON.stringify(res)))

                    setAutenticacaoFalhou(false)
                    navigate('/painel-barbeiro')
                }
                else
                    setAutenticacaoFalhou(true)

            })
    }

    return (
        <AutenticaxaoSC>
            <div>
                <form onSubmit={logar}>

                    <h1>Login Agenda</h1>

                    <label>E-mail:</label>
                    <input type="email" onChange={event => setCredencial({ ...credencial, email: event.target.value })}></input>

                    <label>Senha:</label>
                    <input type="password" onChange={event => setCredencial({ ...credencial, password: event.target.value })}></input>

                    {
                        autenticacaoFalhou ?
                            <label>E-mail ou senha incorreto!</label>
                            : ''
                    }

                    {/* <div className='Login-esqueci-senha-div'>
                            <a href='#'>Esqueci minha senha.</a>
                        </div> */}

                    <button type='submit'>Entrar</button>
                </form>
            </div>
            
            <picture>
                <source media='(max-width: 800px)' srcSet='https://minha-barbearia.online/images/static/Background-mobile.jpg' />
                <img src="https://minha-barbearia.online/images/static/Background-desktop.jpg" alt="" />
            </picture>
        </AutenticaxaoSC>
    )
}
