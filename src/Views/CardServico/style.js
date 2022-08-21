import styled from "styled-components";

export const CardServico = styled.li`
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 300px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);

    img {
        width: 100%;
        height: 60%;
        object-fit: cover;
    }

    img + div {
        width: 100%;
        padding: 0 10px;
        grid-template-columns:  1fr 1fr 1fr;
        grid-template-rows: 1fr 2fr;
        gap: 0;
        justify-content: space-around;
        align-items: center;
    }

    img + div > div {
        height: 50px;
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #808080;
        color: #505050;
        font-family: 'Outfit', sans-serif;
        font-weight: 600;
    }

    div:nth-child(1) {
        display: flex;
        align-items: center;
        gap: 0;
    }

    h2 {
        font-size: 1.3rem;
        word-break: normal;
    }

    .nome-servico-pequeno {
        font-size: 1.1rem;
    }

    p {
        font-size: 1.2rem;
        color: #505050;    
        text-align: end;
    }

    #btnCardServicoWrap {
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px;
        border: none;

    }

    #btnCardServico {
        width: 150px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 17pt;
        font-weight: 300;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        transition: all .2s;
        box-shadow: 0 0 5px rgba(0, 0, 0, .2);
        border-radius: 5px;
        border: 2px solid ${({ theme }) => theme.cores.secundaria};
        background-color: ${({ theme }) => theme.cores.secundaria};
        color: #fff;
        font-family: 'Outfit', sans-serif;

    }

    #btnCardServico:hover {
        background-color: #fff;
        border-color: ${({ theme }) => theme.cores.secundaria};
        color: ${({ theme }) => theme.cores.secundaria};
    }

    @media (max-width: 800px) {
        width: auto;
        height: auto;

        h2 {
            font-size: .8rem;
        }

        p {
            min-width: 50px;
            font-size: .8rem;
        }

        img + div > div {
            height: 40px;
        }

        .nome-servico-pequeno {
            font-size: .7rem;
        }

        #btnCardServicoWrap {
            height: auto;
        }

        #btnCardServico {
            height: 30px;
            width: 100px;
            margin: ${({ theme }) => theme.espacamento[2]}px;
            font-size: 12pt;

        }
    }

    @media (max-width: 450px) {
        h2 {
            font-size: .6em;
        }

        p {
            min-width: 50px;
            font-size: .6em;
        }

        .nome-servico-pequeno {
            font-size: .6rem;
        }

        #btnCardServico {
            height: 25px;
            font-size: .8em;
        }
    }
`