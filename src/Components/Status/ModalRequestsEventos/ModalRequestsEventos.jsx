import React from 'react'

import { ModalRequestsEventosSC } from './style'

import { useEffect } from 'react'
import { lockScroll, unlockScroll } from '../../../Utils/functions'


export default function ModalRequestsEventos(props) {

    useEffect(() => {
        lockScroll()
    }, [0])

    const Confirmacao = () => {
        unlockScroll()
        props.acao()
    }

    return (
        <ModalRequestsEventosSC>
            <div>
                <h1>Aviso</h1>

                <div className="wrapDadosRequest">
                    <div className="wrapDado">
                        <h2>Hora início:</h2>
                        <label>{props.dadosHeader.HoraInicio}</label>
                    </div>
                    <div className="wrapDado">
                        <h2>Hora fim:</h2>
                        <label>{props.dadosHeader.HoraFim}</label>
                    </div>
                    <div className="wrapDado">
                        <h2>Nome:</h2>
                        <label>{props.dadosHeader.NomeEvento}</label>
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Dia</th>
                        <th>Status</th>
                    </tr>
                    {/* {console.log(props.dados)} */}
                    {
                        props.dados != [] &&
                        props.dados.map(item => {
                            return <tr>
                                <td>{item.dia}</td>
                                <td className={item.status}>{item.status}</td>
                            </tr>
                        })
                    }
                </table>

                <button onClick={() => Confirmacao()}>Entendi</button>
            </div>
        </ModalRequestsEventosSC>
    )
}
