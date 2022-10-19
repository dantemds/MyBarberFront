// Este script tem por objetivo fornecer todas as funções responsáveis por listar algo no app

export default function ListarServicos(listaServicos, idServicoSelecionado = null) {

    return listaServicos.map(servico => {
        if (idServicoSelecionado === servico.id)
            return <option key={servico.id} value={servico.id} selected >{servico.nome}</option>
        else
            return <option key={servico.id} value={servico.id}>{servico.nome}</option>
    })
}

export function ListarPrecoServico(listaServicos, idServicoSelecionado) {
    let precoServicoSelecionado

    listaServicos.map(servico => {

        if (servico.id === idServicoSelecionado)
            precoServicoSelecionado = servico.preco
    })

    if (precoServicoSelecionado)
        return precoServicoSelecionado
    else
        return '00'

}

export function ListarBarbeiros(listaServicos, idServicoSelecionado) {
    const servicoSelecionado = listaServicos.find(servico => servico.id === idServicoSelecionado)

    // return servicoSelecionado.listaBarbeiros.map(barbeiro => {
    //     return <option
    //         key={`${barbeiro.idBarbeiro}${barbeiro.barbeiros.nameBarbeiro}`}
    //         value={barbeiro.barbeiros.idBarbeiro}>{barbeiro.barbeiros.nameBarbeiro}
    //     </option>
    // })
}

export function ListarHorariosDisponiveis(listaHorarios) {
    return listaHorarios.map(horario => {
        horario = horario.toString() + ':00'
        horario = horario.toString().replace('.5:00', ':30')
        return <li key={horario}><button>{horario}</button></li>
    })
}