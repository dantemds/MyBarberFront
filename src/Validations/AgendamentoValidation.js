import * as yup from 'yup'

export const validacaoAgendamento = yup.object().shape({
    name: yup.string().required("O nome é obrigatório."),
    email: yup.string().required("O e-mail é obrigatório."),
    contato: yup.string()
    .required('O campo de telefone é obrigatório.'),
    horario: yup.string().min(19, "O horário é obrigatório.").required("O horário é obrigatório."),
    servicosId: yup.string().min(2, "O serviço é obrigatório.").required(),
    barbeirosId: yup.string().min(2, "O barbeiro é obrigatório.").required("O barbeiro é obrigatório.")
})