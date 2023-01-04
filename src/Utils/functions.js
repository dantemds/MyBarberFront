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

export const getUrImagem = banner => {
    if (banner)
        return process.env.REACT_APP_DOMAIN_FRONT_CDN + banner.url
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

export const criarListaBarbeiros = listaServicos => {
    let listaIdBarbeiros = []
    let listaDadosBarbeiroCompleto = []

    // Gera uma lista com os IDs dos barbeiros, porém pode vir repetidos
    listaServicos.map(servico => {
        servico.servicosBarbeiros.map(barbeiro => {
            listaIdBarbeiros.push(barbeiro.barbeiros.idBarbeiro)
            listaDadosBarbeiroCompleto.push(barbeiro.barbeiros)
        })
    })

    // Converte a lista de IDs repetidos em um dicionário sem repetidos
    var dicionario = {};
    for (var i = 0; i < listaIdBarbeiros.length; i++) {
        dicionario[listaIdBarbeiros[i]] = listaDadosBarbeiroCompleto[i];
    }

    // Converte o dicionário em uma lista
    var listaSemRepetidos = [];
    for (var chave in dicionario) {
        listaSemRepetidos.push(dicionario[chave]);
    }

    return listaSemRepetidos
}

export const lockScroll = () => {
    document.documentElement.style.overflow = 'hidden'
    document.body.scroll = "no"
}

export const unlockScroll = () => {
    document.documentElement.style.overflow = 'auto'
    document.body.scroll = "yes"
}

export const padronizaData = (data) => {
    let ano, mes, dia;
    [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`
}

const options = [
    { value: 'domingo', label: 'Domingo' },
    { value: 'segunda', label: 'Segunda-Feira' },
    { value: 'terca', label: 'Terça-Feira' },
    { value: 'quarta', label: 'Quarta-Feira' },
    { value: 'quinta', label: 'Quinta-Feira' },
    { value: 'sexta', label: 'Sexta-Feira' },
    { value: 'sabado', label: 'Sábado' },
]

export const padronizaFeedbackEvento = (eventos) => {
    const listaFeedback = []

    eventos.map((evento, index) => {
        if (evento != undefined) {

            if (evento === 'Falha') {
                listaFeedback.push({ dia: options[index].label, status: 'Falha' })
            }

            else {
                const dia = options.filter((dia) => (dia.value == evento.diaSemana))
                listaFeedback.push({ dia: dia[0].label, status: 'Sucesso' })
            }
        }
    })

    return listaFeedback
}