import React from 'react'
import { GlobalContext } from '../../Contexts/GlobalContext'
import { RodapeSC } from './style'

export default function Rodape() {

    const { dadosTenantBarbearia } = React.useContext(GlobalContext)


    return (
        <RodapeSC>
            <p>&copy; {dadosTenantBarbearia.nomeBarbearia} - Propriedade Minha Barbearia Online</p>
        </RodapeSC>
    )
}