export class EventoModel {

    constructor(dados){
        this.descricaoEvento = dados.descricaoEvento;
        this.diaSemana = dados.diaSemana;
        this.duracao = dados.duracao;
        this.horaFim = dados.horaFim;
        this.horaInicio = dados.horaInicio;
        this.id = dados.idEventoAgendado;
        this.nomeEvento = dados.nomeEvento;
        this.temporario = dados.temporario
        this.dataIncio = dados.dataIncio;
        this.dataFim = dados.dataFim;
    }
}