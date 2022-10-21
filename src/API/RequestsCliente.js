import { PostAgendamentoValidations } from "../Validations/PostAgendamentoValidation"
import Api, { Temporario } from "./ApiConfig"

const getAll = async (barbearia) => {
    let resApi

    await Api().get(`/api/v1/barbearias/${barbearia}/`)
    // await Api().get(`http://localhost:5000/barbearias`)
        .then(res => {
            resApi = res.data
            window.localStorage.setItem('barbeariaAll', JSON.stringify(res.data))
        })
        .catch(()=> console.log('AAAAAAAAAAAAAA'))

    return resApi
}

const postAgendamento = async (agendamento) => {

    let AgendamentoValido = PostAgendamentoValidations(agendamento)

    if (AgendamentoValido) {
        return await Api().post('/agendamentos/', agendamento)
            .then(() => {
                console.log('LOG: Agendamento realizado.')
                return true
            })
            .catch(() => {
                console.log('LOG: Dados inválidos.')
                return false
            })
    }
    else {
        console.log('LOG: Dados repetidos.')
        return false
    }
}

const deleteAgendamento = async (id) => {

    await Api().delete(`/agendamentos/${id}`)
        .then(() => {
            console.log("LOG: Agendamento cancelado.")
            window.location.reload()
        })
        .catch(() => console.log("LOG: Falha ao cancelar o agendamento."))
}

const getAgendamentosBarbeiro = async (idBarbearia ,idBarbeiro, data) => {
  
    return await Temporario().get(`/agendamentos/barbeiro/${idBarbearia}?data=${data}&idBarbeiro=${idBarbeiro}`)
        .then(res => {
            return res.data
        })

}

const getHorariosDisponiveis = async (filtro) => {
    return await Api().get(`/agendas/tenant/${filtro.idBarbearia}?idBarbeiro=${filtro.idBarbeiro}&data=${filtro.data}&dia=${filtro.diaSemana}&idServico=${filtro.idServico}`)
        .then(res => {
            return res.data
        })

}

const postAutenticacao = async (credencial) => {
    return await Api().post('/api/v1/aut', credencial)
        .then(res => {
            window.localStorage.setItem('usuario', JSON.stringify(res.data))
            console.log('LOG: Autenticação realizada com sucesso.')
            return res.data
        })
        .catch(() => {
            console.log('LOG: Autenticação falhou.')
            return null
        })
}

const getToken = () => {
    return window.localStorage.getItem('usuario').token
}


export const RequestsClientes = {
    getAll,
    postAgendamento,
    deleteAgendamento,
    getAgendamentosBarbeiro,
    getHorariosDisponiveis,
    postAutenticacao,
    getToken,
}