import React, { useState } from "react"

export const GlobalContext = React.createContext({})

export const GlobalProvider = (props) => {
    const [dadosTenantBarbearia, setDadosTenantBarbearia] = useState(null)

    return (
        <GlobalContext.Provider value={{
            dadosTenantBarbearia, setDadosTenantBarbearia,
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}