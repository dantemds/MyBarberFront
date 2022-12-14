import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Inicio from '../Pages/Inicio/Inicio'
import FormsAgendamento from '../Pages/FormsAgendamento/FormsAgendamento'
import ConfirmacaoAgendamento from '../Pages/ConfirmacaoAgendamento'
import PainelBarbeiro from '../Pages/PainelBarbeiro/PainelBarbeiro'
import Login from '../Pages/Login/Login'
import {GlobalContext} from '../Contexts/GlobalContext'
import BarbeariaNaoEncontrada from '../Pages/BarbeariaNaoEncontrada/BarbeariaNaoEncontrada'
import CriarEvento from '../Pages/PainelBarbeiro/Components/CriarEvento/CriarEvento'
import ServicosAgendados from '../Pages/PainelBarbeiro/Components/ServicosAgendados/ServicosAgendados'
import EventosMarcados from '../Pages/PainelBarbeiro/Components/EventosMarcados/EventosMarcados'

export default function Rotas() {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:barbearia" element={<Inicio />} />
                <Route path="/forms-agendamento" element={<FormsAgendamento />} />
                <Route path="/confirmacao-agendamento" element={<ConfirmacaoAgendamento />} />
                <Route path="/login" element={<Login />} />

                <Route path="/painel-barbeiro">
                    <Route index element={<PainelBarbeiro><ServicosAgendados/></PainelBarbeiro>}></Route>
                    <Route path='evento' element={<PainelBarbeiro><CriarEvento/></PainelBarbeiro>}></Route>
                    <Route path='eventos' element={<PainelBarbeiro><EventosMarcados/></PainelBarbeiro>}></Route>
                </Route>

                <Route path="/ops" element={<BarbeariaNaoEncontrada />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}