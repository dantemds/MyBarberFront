import React from "react"
import { useState } from "react"

export const GlobalContext = React.createContext({})

export const GlobalProvider = (props) => {
    const [dadosTenantBarbearia, setDadosTenantBarbearia] = useState(null)
    const [ServicoSelecionado, setServicoSelecionado] = useState(null)
    const [tema, setTema] = useState(null)



    return (
        <GlobalContext.Provider value={{
            dadosTenantBarbearia, setDadosTenantBarbearia,
            ServicoSelecionado, setServicoSelecionado,
            tema, setTema,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}