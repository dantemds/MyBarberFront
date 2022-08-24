import React from 'react'
import { CarregandoSC } from './style'

import theme from '../../Styles/tema'

import { Oval } from 'react-loading-icons'

export default function Carregando() {
    return (
        <CarregandoSC>
            <Oval stroke={theme.cores.secundaria} speed={.75}/>
        </CarregandoSC>
    )
}
