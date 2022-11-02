import React from 'react'
import { BarbeariaNaoEncontradaSC } from './style'

export default function BarbeariaNaoEncontrada() {
    return (
        <BarbeariaNaoEncontradaSC>
            <div>
                <h2>Oops...</h2>
                <p>
                    Barbearia não encontrada ou inativa.
                </p>
            </div>

            <picture>
                <source media='(max-width: 800px)' srcSet='https://minha-barbearia.online/images/static/Background-mobile.jpg' />
                <img src="https://minha-barbearia.online/images/static/Background-desktop.jpg" alt="" />
            </picture>
        </BarbeariaNaoEncontradaSC>
    )
}
