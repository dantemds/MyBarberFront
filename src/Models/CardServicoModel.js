export class CardServicoModel {
    constructor(obj){
        this.id = obj.idServico
        this.urlImagem = obj.servicoImagem.url
        this.titulo = obj.nomeServico
        this.preco = obj.precoServico
    }
}