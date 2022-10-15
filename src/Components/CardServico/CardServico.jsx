import React from 'react'
import { CardServicoModel } from '../../Models/CardServicoModel'
import { Link } from 'react-router-dom'
import { CardServicoSC } from './style'
import { ServicoContext } from '../../Contexts/ServicoContext'

export default function CardServico(props) {

    const Card = new CardServicoModel(props.dadosServico)

    const { setServicoSelecionado } = React.useContext(ServicoContext)

    const valTamanhoNomeServico = titulo => {
        if (titulo.length > 16)
            return <h2 className='nome-servico-pequeno'>{titulo}</h2>
        else
            return <h2>{titulo}</h2>
    }

    return (
        <CardServicoSC>
            <img src={Card.urlImagem}></img>

            <div>
                {valTamanhoNomeServico(Card.titulo)}
                <p><span className='spanPreco'>Preço:</span> {Card.preco},00 R$</p>
                <Link id='btnCardServico' to="/forms-agendamento" onClick={() => setServicoSelecionado(Card)}>Agendar</Link>
            </div>
        </CardServicoSC>
    )
}
