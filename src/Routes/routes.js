import { BrowserRouter, Routes, Route } from 'react-router-dom'

import React from 'react'
import Inicio from '../Pages/Inicio'
import FormsAgendamento from '../Pages/FormsAgendamento'
import ConfirmacaoAgendamento from '../Pages/ConfirmacaoAgendamento'
import PainelBarbeiro from '../Pages/PainelBarbeiro'
import Login from '../Pages/Login' 
import UploadS3 from '../Components/UploadS3/uploadS3'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/:barbearia" element={<Inicio />} />
                <Route path="/forms-agendamento" element={<FormsAgendamento />} />
                <Route path="/confirmacao-agendamento" element={<ConfirmacaoAgendamento />} />
                <Route path="upload" element={<UploadS3></UploadS3>}/>
                <Route path="/login" element={<Login />} />
                <Route path="/painel-barbeiro" element={<PainelBarbeiro />} />

                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )

}