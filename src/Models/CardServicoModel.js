export class CardServicoModel {
    constructor(obj) {
        this.id = obj.idServico
        this.urlImagem = "https://minha-barbearia.online/" + this.validarImagem(obj.servicoImagem)
        this.titulo = obj.nomeServico
        this.preco = obj.precoServico
    }

    validarImagem = (servico) => {
        if (servico)
            return servico.url
        else
            return ''
    }
}