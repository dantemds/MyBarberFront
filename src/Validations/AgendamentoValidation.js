import * as yup from 'yup'

export const validacaoAgendamento = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().required("O e-mail é obrigatório."),
    contato: yup.string().required("O telefone é obrigatório."),
    horario: yup.string().required("O horário é obrigatório."),
    servicosId: yup.number().positive("O serviço é obrigatório.").required(),
    barbeirosId: yup.number().positive("O barbeiro é obrigatório.").required()
})