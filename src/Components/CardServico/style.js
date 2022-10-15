import styled from "styled-components";

export const CardServicoSC = styled.li`
        position: relative;
        background-color: rgb(255, 255, 255);
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 200px;
        border-radius: 5px;
        overflow: hidden;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072), 0 41.8px 33.4px rgba(0, 0, 0, .086), 0 100px 80px rgba(0, 0, 0, .12);

    img {
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    img + div {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        gap: 0;
        padding: 0 2rem;
        
        background-image: linear-gradient(rgba(0, 0, 0, .2), #202020 80%);
    }


    h2, p {
        color: #fff;
        word-break: normal;
        text-shadow: 0 0 rgba(0, 0, 0, 1);
    }

    h2 {
        width: 90%;
        text-align: center;
        font-size: 1.5rem;
        font-weight: 900;
        letter-spacing: 1px;
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
    }

    p {
        width: 90%;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
    }

    .spanPreco {
        font-weight: 600;
    }

    .nome-servico-pequeno {
        font-size: 1.2rem;
    }

    #btnCardServico {
        width: 90%;
        height: auto;
        padding: .5em 0;
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        transition: all .2s;
        border-radius: 50px;
        border: 2px solid ${({ theme }) => theme.cores.secundaria};
        background-color: ${({ theme }) => theme.cores.secundaria};
        color: #fff;
        font-family: 'Nunito', sans-serif;

    }

    #btnCardServico:hover {
        background-color: transparent;
        border-color: ${({ theme }) => theme.cores.secundaria};
        color: ${({ theme }) => theme.cores.secundaria};
    }

    @media (max-width: 800px) {
        /* width: auto; */
        /* height: auto; */

        /* h2 {
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
        } */

        /* #btnCardServico {
            height: 30px;
            width: 100px;
            margin: ${({ theme }) => theme.espacamento[2]}px;
            font-size: 12pt;

        } */
    }

    @media (max-width: 450px) {
        width: 250px;
        height: 165px;

        h2 {
            font-size: 1.2rem;
        }

        p {
            font-size: 1rem;
        }

        .nome-servico-pequeno {
            font-size: 1rem;
        }

        #btnCardServico {
            font-size: .8rem;
        }
    }
`