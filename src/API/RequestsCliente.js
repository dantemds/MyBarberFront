import { padronizaFeedbackEvento } from "../Utils/functions"
import { PostAgendamentoValidations } from "../Validations/PostAgendamentoValidation"
import Api from "./ApiConfig"

const getAll = async (barbearia) => {
    let resApi

    await Api().get(`/api/v1/barbearias/${barbearia}/`)
        .then(res => {
            resApi = res.data
        })
    // .catch(() => console.log('AAAAAAAAAAAAAA'))

    return resApi
}

const postAgendamento = async (agendamento) => {

    let AgendamentoValido = PostAgendamentoValidations(agendamento)

    if (AgendamentoValido) {
        return await Api().post('/api/v1/agendamentos/', agendamento)
            .then((res) => {
                // console.log(res)
                if (res.status === 201 && res.config.method === 'post') {
                    console.log('LOG: Agendamento realizado.')
                    // return true
                    return res
                }
                else {
                    // return false
                    return false
                }
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

    await Api().delete(`api/v1/agendamentos/${id}`)
        .then(() => {
            console.log("LOG: Agendamento cancelado.")
            window.location.reload()
        })
        .catch(() => console.log("LOG: Falha ao cancelar o agendamento."))
}

const deleteEvento = async (id) => {
    await Api().delete(`/api/v1/eventosagendados/${id}`)
        .then(() => {
            window.location.reload()
        })
        .catch(() => console.log("LOG: Falha ao cancelar o agendamento."))
}

const getAgendamentosBarbeiro = async (idBarbearia, idBarbeiro, data) => {

    return await Api().get(`api/v1/agendamentos/barbeiro/${idBarbearia}?data=${data}&idBarbeiro=${idBarbeiro}`)
        .then(res => {
            return res.data
        })
}

const getEventosBarbeiro = async (idBarbeiro) => {
    return await Api().get(`api/v1/eventosagendados/${idBarbeiro}`)
        .then(res => {
            return res.data;
        });
}

const getBarbeiros = async (idBarbearia) => {

    return await Api().get(`api/v1/barbeiros/barbearia/${idBarbearia}`)
        .then(res => {
            return res.data
        })
}

const getHorariosDisponiveis = async (filtro) => {
    return await Api().get(`/api/v1/agendas/tenant/${filtro.idBarbearia}?idBarbeiro=${filtro.idBarbeiro}&data=${filtro.data}&dia=${filtro.diaSemana}&idServico=${filtro.idServico}`)
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

const postEvento = async (evento) => {
    return await Api().post('/api/v1/eventosagendados', evento)
        .then(res => {
            // console.log(padronizaFeedbackEvento(res.data, 'Sucesso'))
            return res.data
        })
        .catch(() => {
            // console.log('LOG: Evento Falhou');
            return 'Falha'
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
    getBarbeiros,
    getHorariosDisponiveis,
    postAutenticacao,
    getToken,
    postEvento,
    getEventosBarbeiro,
    deleteEvento,
}