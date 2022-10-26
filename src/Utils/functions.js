export const isExist = (condition, returnIsFalse) => {
    if (condition)
        return condition
    else
        return returnIsFalse
}

export const findBanner = (banner, conditionalState) => {
    if (banner)
        return banner.find(banner => banner.mobile === conditionalState)
    else
        return ''
}

export const getUrlBanner = banner => {
    if (banner)
        return process.env.REACT_APP_DOMAIN_FRONT + banner.url
    else
        return ""
}


export const ordenarImagens = lista => {
    if (lista)
        return lista.sort((x, y) => x.numeroImagem - y.numeroImagem)
    else
        return []
}

export const formatarHorario = horario => {
    horario = horario.toString() + ':00'
    horario = horario.toString().replace('.5:00', ':30')

    if (horario.length === 4)
        horario = '0' + horario

    return horario
}