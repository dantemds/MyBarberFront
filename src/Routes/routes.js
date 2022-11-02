import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Inicio from '../Pages/Inicio/Inicio'
import FormsAgendamento from '../Pages/FormsAgendamento/FormsAgendamento'
import ConfirmacaoAgendamento from '../Pages/ConfirmacaoAgendamento'
import PainelBarbeiro from '../Pages/PainelBarbeiro/PainelBarbeiro'
import Login from '../Pages/Login/Login'
import { GlobalContext } from '../Contexts/GlobalContext'
import BarbeariaNaoEncontrada from '../Pages/BarbeariaNaoEncontrada/BarbeariaNaoEncontrada'

export default function Rotas() {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:barbearia" element={<Inicio />} />
                {(dadosTenantBarbearia ? dadosTenantBarbearia.funcaoAgendamento : false) &&
                    <Route path="/forms-agendamento" element={<FormsAgendamento />} />
                }
                <Route path="/confirmacao-agendamento" element={<ConfirmacaoAgendamento />} />
                <Route path="/login" element={<Login />} />
                <Route path="/painel-barbeiro" element={<PainelBarbeiro />} />
                
                
                <Route path="/ops" element={<BarbeariaNaoEncontrada />} />

                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}