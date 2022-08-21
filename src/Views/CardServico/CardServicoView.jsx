import React from 'react'

import { Link } from 'react-router-dom'

import { CardServico } from './style'

import { ServicoContext } from '../../Contexts/ServicoContext'

export default function CardServicoView(props) {

    const { setServicoSelecionado } = React.useContext(ServicoContext)

    const valTamanhoNomeServico = titulo => {
        if (titulo.length > 16)
            return <h2 className='nome-servico-pequeno'>{titulo}</h2>
        else
            return <h2>{titulo}</h2>

    }

    return (
        <CardServico>
            <img src={props.dadosCard.urlImagem}></img>

            <div>
                <div>
                    {valTamanhoNomeServico(props.dadosCard.titulo)}
                    <p>{props.dadosCard.preco},00 R$</p>
                </div>

                <div id='btnCardServicoWrap'>
                    <Link id='btnCardServico' to="/forms-agendamento" onClick={() => setServicoSelecionado(props.dadosCard)}>Agendar</Link>
                </div>
            </div>
        </CardServico>
    )
}