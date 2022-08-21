const toDate = dataSelecionada => {
    let data = new Date(dataSelecionada)

    let dia = data.getDate().toString().padStart(2, '0')
    let mes = (data.getMonth() + 1).toString().padStart(2, '0')
    let ano = data.getFullYear().toString()

    return `${ano}-${mes}-${dia}`
}


export const formatar = {
    toDate,
}