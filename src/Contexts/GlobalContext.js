import React from "react"
import { useState } from "react"

export const GlobalContext = React.createContext({})

export const GlobalProvider = (props) => {
    const [dadosTenantBarbearia, setDadosTenantBarbearia] = useState(null)
    const [servicoSelecionado, setServicoSelecionado] = useState(null)
    const [tema, setTema] = useState(null)



    return (
        <GlobalContext.Provider value={{
            dadosTenantBarbearia, setDadosTenantBarbearia,
            servicoSelecionado, setServicoSelecionado,
            tema, setTema,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}