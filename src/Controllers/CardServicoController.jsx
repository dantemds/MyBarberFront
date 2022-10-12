import React from 'react'
import { CardServicoModel } from '../Models/CardServicoModel'
import CardServicoView from '../Views/CardServico/CardServicoView'

export default function CardServicoController(props) {
console.log(props.dadosServico)
    const Card = new CardServicoModel(props.dadosServico)

    return (
        <CardServicoView dadosCard={Card}/>
    )
}
