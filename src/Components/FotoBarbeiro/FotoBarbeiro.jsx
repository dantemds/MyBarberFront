import React from 'react'

import { FotoBarbeiroSC } from './style'

export default function FotoBarbeiro(props) {

    const fotoBarbeiro = () => {
        const domain = process.env.REACT_APP_DOMAIN_FRONT
        const fotoBarbeiro = props.listaBarbeiros.find(barbeiro => barbeiro.barbeiros.idBarbeiro == props.idBarbeiro).barbeiros.barbeiroImagem

        if (fotoBarbeiro)
            return domain + fotoBarbeiro.url
        else
            return ''
    }

    return (
        <FotoBarbeiroSC>
            <picture>
                <img src={fotoBarbeiro()} alt={'foto-barbeiro'} />
            </picture>
        </FotoBarbeiroSC>
    )
}
