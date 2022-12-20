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
                        <label>07:00</label>
                    </div>
                    <div className="wrapDado">
                        <h2>Hora fim:</h2>
                        <label>08:00</label>
                    </div>

                    <div className="wrapDado">
                        <h2>Nome:</h2>
                        <label>Almoço</label>
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Dia</th>
                        <th>Status</th>
                    </tr>
                    {console.log(props.dados)}
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

                <p>Nos dias com status <span className='Falha'>Falha</span> não foram criados eventos, verifique se já existe outro evento ou agendamento de serviço neste horário.</p>

                <button onClick={() => Confirmacao()}>Entendi</button>
            </div>
        </ModalRequestsEventosSC>
    )
}
