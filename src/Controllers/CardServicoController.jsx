import React from 'react'
import { CardServicoModel } from '../Models/CardServicoModel'
import CardServicoView from '../Views/CardServico/CardServicoView'

export default function CardServicoController(props) {

    const Card = new CardServicoModel(props.dadosServico)

    return (
        <CardServicoView dadosCard={Card}/>
    )
}
