import styled from "styled-components";

import bannerApresentacaoDesktop from '../../Images/background-desktop-1500.jpeg'
import bannerApresentacaoMobile from '../../Images/banner-inicio-mobile.jpg'

export const Apresentacao = styled.section`

    display: flex;
    margin: auto;
    margin-top: 50px;
    height: 70vh;
    width: 100%;

    background-image: url(${bannerApresentacaoDesktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    > div {
        position: relative;
        width: 100%;
        height: inherit;
        background-color: rgba(0, 0, 0, .1);
        box-shadow: 0 0 50px rgba(0,0,0,0.9) inset;
        padding-top: 2rem;
    }

    h1 {
        width: 250px;
        margin: auto;
        margin-top: 50px;
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
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: end;
        bottom: 100px;
    }

    #btn-agendar {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 200px;
        height: auto;
        padding: ${({ theme }) => theme.espacamento[3]}px;
        color: #fff;
        border-radius: 5px;
        font-size: 2rem;
        background-color: #00c943;
        text-decoration: none;
        text-shadow: ${({ theme }) => theme.sombras.texto};
        text-transform: uppercase;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    
    #btn-agendar > span {
        font-weight: 300;
        font-family: 'Outfit', sans-serif;
    }

    @media (max-width: 768px) {
        height: calc(80vh - 50px);
        background-image: url(${bannerApresentacaoMobile});
    }
`