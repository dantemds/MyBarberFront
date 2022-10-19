export class ListaServicoModel {

    constructor(listaServicos) {
        this.servicos = []
        this.GeraLista(listaServicos)
    }

    GeraLista(lista) {
        lista.map(servico => {

            const objServico = {
                id: servico.idServico,
                nome: servico.nomeServico,
                duracao: servico.tempoServico,
                preco: servico.precoServico,
                listaBarbeiros: servico.servicosBarbeiros ? servico.servicosBarbeiros : []
            }

            this.servicos.push(objServico)
        })
    }
}