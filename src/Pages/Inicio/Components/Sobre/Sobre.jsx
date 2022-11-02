import React, { useEffect } from 'react'

import { SobreSC } from './style.js'

import { BsInstagram, BsWhatsapp, BsTelephone, BsEnvelope, BsChevronRight, BsChevronLeft } from 'react-icons/bs'
import { GlobalContext } from '../../../../Contexts/GlobalContext'
import { criarListaBarbeiros, getUrImagem, ordenarImagens } from '../../../../Utils/functions'

export default function Sobre() {
    const { dadosTenantBarbearia } = React.useContext(GlobalContext)

    const enderecos = dadosTenantBarbearia.enderecos
    const contatos = dadosTenantBarbearia.contatos
    const horarioFuncionamento = dadosTenantBarbearia.horarioFuncionamento && dadosTenantBarbearia.horarioFuncionamento.funcionamento
    const barbeiros = criarListaBarbeiros(dadosTenantBarbearia.servicos)
    const imagensLandingPage = ordenarImagens(dadosTenantBarbearia.landingPageImages)

    const btnScroll = (direcao, id) => {
        window.document.getElementById(id).scrollLeft += direcao
    }

    return (
        <SobreSC id='Sobre'>
            <div className='content-sobre'>
                <h2>Conheça nosso espaço</h2>
                <div id="scroll-fotos-barbearia" className="scroll-horizontal fotos-barbearia">

                    {imagensLandingPage.map(imagem => {
                        return <picture key={imagem.idLandingPageImage}>
                            <img src={process.env.REACT_APP_DOMAIN_FRONT + imagem.url} alt={imagem.posicao + imagem.numeroImagem}></img>
                        </picture>
                    })}
                </div>
                <div>
                    <button className="btnScroll btnScrollLeft" onClick={() => btnScroll(-100, 'scroll-fotos-barbearia')}>
                        <BsChevronLeft />
                    </button>
                    <button className="btnScroll btnScrollRight" onClick={() => btnScroll(100, 'scroll-fotos-barbearia')}>
                        <BsChevronRight />
                    </button>
                </div>

                <h3 className='h3Barbeiros'>Nosso{barbeiros.length > 1 ? 's' : ''} profissiona{barbeiros.length > 1 ? 'is' : 'l'}</h3>
                {
                    barbeiros &&
                    <div id="scroll-fotos-barbeiros" className="scroll-horizontal fotos-barbeiro">
                        {
                            barbeiros.map(barbeiro => {
                                return <div key={barbeiro.idBarbeiro}>
                                    <picture>
                                        <img
                                            src={getUrImagem(barbeiro.barbeiroImagem)}
                                            alt={barbeiro.nameBarbeiro} />
                                    </picture>
                                    <p className='nomeBarbeiro'>{barbeiro.nameBarbeiro}</p>
                                </div>
                            })
                        }
                    </div>
                }
                {
                    barbeiros.length > 7 &&
                    <div>
                        <button className="btnScroll btnScrollLeft" onClick={() => btnScroll(-100, 'scroll-fotos-barbeiros')}>
                            <BsChevronLeft />
                        </button>
                        <button className="btnScroll btnScrollRight" onClick={() => btnScroll(100, 'scroll-fotos-barbeiros')}>
                            <BsChevronRight />
                        </button>
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
                                {
                                    horarioFuncionamento.map((horario, index) => <p key={index} className="pHorarioFuncionamento">{horario}<br /></p>)
                                }
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
                                        ? <a href={`https://www.instagram.com/${contatos.instagrams[0]}`} target="_blank">
                                            <BsInstagram />
                                            <span>@{contatos.instagrams[0]}</span>
                                        </a>
                                        : ''
                                }

                                {
                                    contatos.celulares
                                        ? contatos.celulares.map((celular, index) =>
                                            <a key={index} href={`https://api.whatsapp.com/send?phone=${celular.replace(" ", "")}`} target="_blank">
                                                <BsWhatsapp />
                                                <span>{`(${celular.replace(" ", ') ')}`}</span>
                                            </a>)
                                        : ''
                                }

                                {
                                    contatos.telefones != ''
                                        ? contatos.telefones.map((telefone, index) =>
                                            <a key={index} target={'_blank'} href={`tel:${telefone}`}>
                                                <BsTelephone />
                                                <span>{`(${telefone.replace(" ", ') ')}`}</span>
                                            </a>)
                                        : ''
                                }

                                {
                                    contatos.emails
                                        ? contatos.emails.map((email, index) =>
                                            <a key={index} href={`mailto:${email}?subject=Dúvidas Atemdimento`} target="_blank">
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
