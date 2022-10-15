import React, { useEffect } from 'react'

import { SobreSC } from './style.js'

import foto1 from '../../Images/Sobre/foto-1-750.jpg'
import foto2 from '../../Images/Sobre/foto-2-750.jpg'
import foto3 from '../../Images/Sobre/foto-3-750.jpg'
import foto4 from '../../Images/Sobre/foto-4-750.jpg'
import foto5 from '../../Images/Sobre/foto-5-750.jpg'

import { BsInstagram, BsWhatsapp, BsTelephone, BsEnvelope } from 'react-icons/bs'

export default function SobreView() {

    const barbeariaAll = JSON.parse(window.localStorage.getItem('barbeariaAll'))
    const enderecos = barbeariaAll.enderecos
    const contatos = barbeariaAll.contatos
    const horarioFuncionamento = barbeariaAll.horarioFuncionamento && barbeariaAll.horarioFuncionamento.funcionamento
    const barbeiros = barbeariaAll.barbeiros

    useEffect(() => {
        window.document.getElementById('teste').scroll(100, 0)
    }, [0])

    return (
        <SobreSC id='Sobre'>
            <div className='content-sobre'>
                <h2>Conheça nosso espaço</h2>
                <div className="scroll-horizontal fotos-barbearia" id='teste'>
                    <picture>
                        <img src={foto1} alt="Foto-barbearia"></img>
                    </picture>
                    <picture>
                        <img src={foto2} alt="Foto-barbearia"></img>
                    </picture>
                    <picture>
                        <img src={foto3} alt="Foto-barbearia"></img>
                    </picture>
                    <picture>
                        <img src={foto4} alt="Foto-barbearia"></img>
                    </picture>
                    <picture>
                        <img src={foto5} alt="Foto-barbearia"></img>
                    </picture>
                </div>

                <h3 style={{ "margin-top": "48px" }}>Nossos barbeiros</h3>
                {
                    barbeiros &&
                    <div className="scroll-horizontal fotos-barbeiro">
                        {
                            barbeiros.map(barbeiro => {
                                return <div>
                                    <picture>
                                        <img src={barbeiro.foto} alt={barbeiro.nome} />
                                    </picture>
                                    <p style={{ "text-decoration": "none" }}>{barbeiro.nome}</p>
                                </div>
                            })
                        }
                    </div>
                }

                <div className='wrap-infos-texto'>
                    <div className='wrap-titulo-texto'>
                        <h3>Endereço</h3>
                        {
                            enderecos &&
                            <div className="">
                                <p>
                                    {enderecos.logradouro} {enderecos.numero}, {enderecos.bairro}<br />
                                    {enderecos.cidade}/{enderecos.estado}, {enderecos.cep}
                                </p>
                            </div>
                        }
                    </div>

                    <div className='wrap-titulo-texto'>
                        <h3>Horário de funcionamento</h3>
                        {
                            horarioFuncionamento &&
                            <div className="">
                                <p>
                                    {
                                        horarioFuncionamento.map(horario => <>{horario}<br /></>)
                                    }
                                </p>
                            </div>
                        }
                    </div>

                    <div className='wrap-titulo-texto'>
                        <h3>Entre em contato</h3>
                        {
                            contatos &&
                            <>
                                {
                                    contatos.instagrams.length > 0
                                        ? <a href={contatos.instagrams[1]} target="_blank">
                                            <BsInstagram />
                                            <span>@{contatos.instagrams[0]}</span>
                                        </a>
                                        : ''
                                }

                                {
                                    contatos.celulares
                                        ? contatos.celulares.map(celular =>
                                            <a href={`https://api.whatsapp.com/send?phone=${celular.replace(" ", "")}`} target="_blank">
                                                <BsWhatsapp />
                                                <span>{`(${celular.replace(" ", ') ')}`}</span>
                                            </a>)
                                        : ''
                                }

                                {
                                    contatos.telefones != ''
                                        ? contatos.telefones.map(telefone =>
                                            <a target={'_blank'} href={`tel:${telefone}`}>
                                                <BsTelephone />
                                                <span>{`(${telefone.replace(" ", ') ')}`}</span>
                                            </a>)
                                        : ''
                                }

                                {
                                    contatos.emails
                                        ? contatos.emails.map(email =>
                                            <a href={`mailto:${email}?subject=Dúvidas Atemdimento`} target="_blank">
                                                <BsEnvelope />
                                                <span>{email}</span>
                                            </a>)
                                        : ''
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </SobreSC >
    )
}
