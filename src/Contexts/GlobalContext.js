import React from "react"
import { useState } from "react"
import { CardServicoModel } from "../Models/CardServicoModel"

export const GlobalContext = React.createContext({})

export const GlobalProvider = (props) => {
    const [tema, setTema] = useState(null)
    const [dadosTenantBarbearia, setDadosTenantBarbearia] = useState(null)
    const [servicoSelecionado, setServicoSelecionado] = useState(new CardServicoModel())



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