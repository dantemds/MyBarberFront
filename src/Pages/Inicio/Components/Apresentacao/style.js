import styled from "styled-components";

export const ApresentacaoSC = styled.section`

    display: flex;
    margin: auto;
    height: 70vh;
    min-height: 400px;
    width: 100%;
    
    background-image: url(${(props) => props.urlBannerDesktop});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    > div {
        position: relative;
        display: flex;
        justify-content: space-between;
        padding: 4.5rem;
        flex-direction: column;
        width: 100%;
        min-height: 400px;
        height: inherit;
        background-color: rgba(0, 0, 0, .1);
        box-shadow: 0 0 50px rgba(0,0,0,0.9) inset;
    }

    h1 {
        width: 250px;
        margin: auto;
        margin-top: 50px;
        text-align: center;
        font-size: 2.5rem;
        font-weight: 200;
        font-style: italic;
        text-shadow: 0 0 0.4em #000;
        color: #fff;
        transform: rotate(-20deg) translateX(-12px);
        z-index: 100;
        font-family: 'Lobster', sans-serif !important;
    }

    .Wrap-Medias-Sociais {
        width: 100%;
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        margin: 0 auto;
    }

    .Wrap-Medias-Sociais a {
        width: 16px;
        height: 22px;
        /* padding-bottom: 4px; */
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
    }

    .Wrap-Medias-Sociais a svg {
        color: #fff;
        filter:drop-shadow(0 0 4px #000);
    }

    .Wrap-btn-agendar {
        width: 16rem;
        margin: 0 auto;
    }

    .btn-agendar {
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        margin: auto;
        padding: 1rem 4rem;
        color: #fff;
        border: none;
        border-radius: 50px;
        font-size: 1.5rem;
        line-height: 1.5rem;
        background-color: ${({ theme }) => theme.cores.secundaria};
        text-decoration: none;
        text-shadow: ${({ theme }) => theme.sombras.texto};
        text-transform: uppercase;
        box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    }
    
    #btn-agendar > span {
        font-weight: 400;
        padding-top: 4px;
    }

    @media (max-width: 768px) {
        height: calc(80vh - 50px);
        background-image: url(${(props) => props.urlBannerMobile});

        > div {
            padding: 4rem 24px;
        }

        .Wrap-Medias-Sociais {
            width: 100%;
        }
    }
`