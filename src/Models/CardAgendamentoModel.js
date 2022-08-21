export class CardAgendamentoModel {

    constructor(dadosAgendamento){
        
        this.id = dadosAgendamento.idAgendamento
        this.nomeCliente = dadosAgendamento.nomeCliente
        this.contatoCliente = dadosAgendamento.contato
        this.emailCliente = dadosAgendamento.email
        this.nomeServico = dadosAgendamento.nomeServico
        this.horarioServico = dadosAgendamento.horarioAgendamento
        this.precoServico = dadosAgendamento.precoServico
    }
}