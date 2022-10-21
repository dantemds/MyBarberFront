import React from 'react'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { MapaSC } from './style'

export default function Mapa() {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    return (
        <MapaSC id="Mapa-Section">
            <h1>Estamos aqui!</h1>
            {
                dadosTenantBarbearia.enderecos &&
                <div>
                    <iframe src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_API_KEY_GOOGLE_MAPS}&q=${dadosTenantBarbearia.enderecos.logradouro.replace(/ /g, '+')},${dadosTenantBarbearia.enderecos.numero}`} loading="lazy"></iframe>
                </div>
            }
        </MapaSC>
    )
}