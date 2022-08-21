export const PostAgendamentoValidations = dadosAgendamento => {

    if (window.localStorage.getItem('infoAgendamento') === JSON.stringify(dadosAgendamento)) {
        return false
    }

    else {
        window.localStorage.setItem('infoAgendamento', JSON.stringify(dadosAgendamento))
        return true
    }
}