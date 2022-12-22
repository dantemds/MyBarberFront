import * as yup from 'yup'

export const validacaoEvento = yup.object().shape({
    NomeEvento: yup.string().required("O nome é obrigatório."),
    DescricaoEvento: yup.string().required("A descrição é obrigatória."),
    HoraInicio: yup.string().required("Hora início é obrigatória."),
    HoraFim: yup.string().required("Hora fim é obrigatória."),
    DiaSemana: yup.string().required("Seleciona ao menos um dia."),
    DataInicio: yup.string().required("Data início é obrigatória."),
    DataFim: yup.string().required("Data fim é obrigatória."),
    Temporario: yup.string("O barbeiro é obrigatório.").required("O barbeiro é obrigatório.")
})