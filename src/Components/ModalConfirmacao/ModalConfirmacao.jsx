import React from 'react'

import { ModalConfirmacaoSC } from './style'

import { DetalhesAgendamentoContext } from '../../Contexts/DetalhesAgendamentoContext'


export default function ModalConfirmacao(props) {

    const { setExibirConfirmacaoCancelamento } = React.useContext(DetalhesAgendamentoContext)


    const ConfirmacaoSim = () => {
        setExibirConfirmacaoCancelamento(false)
        props.acao()
    }

    const ConfirmacaoNao = () => {
        setExibirConfirmacaoCancelamento(false)
    }

    return (
        <ModalConfirmacaoSC>
            <div>
                <h1>Confirmação</h1>
                <p>{props.mensagem}</p>
                <div>
                    <button onClick={ConfirmacaoSim}>Sim</button>
                    <button onClick={ConfirmacaoNao}>Não</button>
                </div>
            </div>
        </ModalConfirmacaoSC>
    )
}
