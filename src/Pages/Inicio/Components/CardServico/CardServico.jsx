import React from 'react'
import { CardServicoModel } from '../../../../Models/CardServicoModel'
import { Link } from 'react-router-dom'
import { CardServicoSC } from './style'
import { GlobalContext } from '../../../../Contexts/GlobalContext'

export default function CardServico(props) {

    const Card = new CardServicoModel(props.dadosServico)

    const { dadosTenantBarbearia, setServicoSelecionado } = React.useContext(GlobalContext)

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
                {
                    dadosTenantBarbearia.funcaoAgendamento
                        ? <Link to='/forms-agendamento' className='btnCardServico' onClick={() => setServicoSelecionado(Card)}>
                            <span>Agendar</span>
                        </Link>

                        : <a href='#Sobre' className='btnCardServico'>
                            <span>Conhecer</span>
                        </a>
                }
            </div>
        </CardServicoSC>
    )
}
