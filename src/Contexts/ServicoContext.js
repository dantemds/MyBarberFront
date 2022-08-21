import React, { useState } from 'react'

export const ServicoContext = React.createContext({})

export const ServicoProvider = (props) => {
    const [ServicoSelecionado, setServicoSelecionado] = useState(null)
    const [idBarbearia, setIdBarbearia] = useState(null)
    const [rotaBarbearia, setRotaBarbearia] = useState('')

    return (
        <ServicoContext.Provider value={{
            ServicoSelecionado, setServicoSelecionado,
            idBarbearia, setIdBarbearia,
            rotaBarbearia, setRotaBarbearia,
        }}>
            {props.children}
        </ServicoContext.Provider>
    )
}