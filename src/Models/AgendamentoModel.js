export class AgendamentoModel {
    constructor(idBarbearia, dadosForms, data, hora){
        this.name = dadosForms.name
        this.email = dadosForms.email
        this.contato = dadosForms.contato
        this.horario = `${data}T${hora}:00`
        this.servicosId = dadosForms.servicosId
        this.barbeirosId = dadosForms.barbeirosId
        this.barbeariasId = idBarbearia
    }
}