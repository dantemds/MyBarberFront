import React from 'react'

import { ModalConfirmacaoSC } from './style'

import { DetalhesAgendamentoContext } from '../../Contexts/DetalhesAgendamentoContext'
import { useEffect } from 'react'
import { lockScroll, unlockScroll } from '../../Utils/functions'


export default function ModalConfirmacao(props) {

    const { setExibirConfirmacaoCancelamento } = React.useContext(DetalhesAgendamentoContext)


    useEffect(() => {
        lockScroll()
    }, [0])

    const ConfirmacaoSim = () => {
        unlockScroll()
        setExibirConfirmacaoCancelamento(false)
        props.acao()
    }

    const ConfirmacaoNao = () => {
        unlockScroll()
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
