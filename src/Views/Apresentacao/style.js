import styled from "styled-components";

import bannerApresentacaoDesktop from '../../Images/background-desktop-1500.jpeg'
import bannerApresentacaoMobile from '../../Images/banner-inicio-mobile.jpg'

export const Apresentacao = styled.section`

    display: flex;
    margin: auto;
    height: 70vh;
    width: 100%;

    background-image: url(${bannerApresentacaoDesktop});
    background-image: url('https://d1kvv1nz6mzy5a.cloudfront.net/images/Background-reuniao-Muralis-6anos-3.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    > div {
        position: relative;
        width: 100%;
        height: inherit;
        background-color: rgba(0, 0, 0, .1);
        box-shadow: 0 0 50px rgba(0,0,0,0.9) inset;
    }

    h1 {
        width: 250px;
        margin: auto;
        margin-top: calc(50px + 4rem);
        text-align: center;
        font-size: 3rem;
        font-style: italic;
        text-shadow: 0 0 0.4em #000;
        color: #fff;
        transform: rotate(-20deg) translateX(-12px);
        z-index: 100;
        font-family: 'Lobster', sans-serif;
    }

    div + div {
        position: absolute;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: end;
        bottom: 4rem;
        left: 50%;
        right: 50%;
    }

    #btn-agendar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        padding: 1rem 4rem;
        margin-bottom: 0;
        color: #fff;
        border-radius: 50px;
        font-size: 1.5rem;
        line-height: 1.5rem;
        background-color: #00c943;
        text-decoration: none;
        text-shadow: ${({ theme }) => theme.sombras.texto};
        text-transform: uppercase;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    
    #btn-agendar > span {
        font-weight: 300;
    }

    @media (max-width: 768px) {
        height: calc(80vh - 50px);
        background-image: url(${bannerApresentacaoMobile});
    }
`