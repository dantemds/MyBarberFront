export class ListaServicoModel {

    constructor(listaServicos) {
        this.servicos = []
        this.barbeiros = []
        this.GeraLista(listaServicos)
    }

    GeraLista(lista) {
        lista.map(servico => {

            const objServico = {
                id: servico.idServico,
                nome: servico.nomeServico,
                duracao: servico.tempoServico,
                preco: servico.precoServico
            }

            this.barbeiros.push([servico.idServico, servico.servicosBarbeiros])
            this.servicos.push(objServico)
        })
    }
}