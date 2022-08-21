export default function ExibirFotoBarbeiro(listaBarbeiros, idBarbeiroSelecionado, idServicoSelecionado) {
    let url = ''


    listaBarbeiros.map(servicos => {
        if (servicos[0] == idServicoSelecionado) {

            servicos[1].map(barbeiro => {
                if (barbeiro.barbeiros.idBarbeiro == idBarbeiroSelecionado)
                    url = barbeiro.barbeiros.barbeiroImagem.url
            })
        }
    })

    return url
}