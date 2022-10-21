export class CardServicoModel {
    constructor(obj = {
        idServico: '',
        urlImagem: '',
        nomeServico: '',
        precoServico: '00',
        servicosBarbeiros: []
    }) {
        this.id = obj.idServico
        this.urlImagem = "https://minha-barbearia.online/" + this.validarImagem(obj.servicoImagem)
        this.titulo = obj.nomeServico
        this.preco = obj.precoServico
        this.listaBarbeiros = obj.servicosBarbeiros
    }

    validarImagem = (servico) => {
        if (servico)
            return servico.url
        else
            return ''
    }
}