import styled from "styled-components";

export const ServicosSC = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: ${({ theme }) => theme.espacamento[7]}px 0px;

    h1 {
        width: 100%;
        height: 54px;
        font-weight: 200;
        font-size: 22pt;
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
        text-transform: uppercase;
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
    }

    ul {
        display: grid;
        justify-content: center;
        grid-template-columns: 300px 300px 300px;
        grid-column-gap: 2em;
        grid-row-gap: 2em;
        padding: ${({ theme }) => theme.espacamento[6]}px;
    }


    @media (max-width: 800px) {
        padding: ${({ theme }) => theme.espacamento[7]}px ${({ theme }) => theme.espacamento[4]}px;

        h1 {
            height: 45px;
            font-size: 1.5rem;
            text-align: center;
        }

        ul {
            width: 100%;
            grid-column-gap: .7em;
            grid-row-gap: .5em;
            grid-template-columns: 1fr 1fr;
        }
    }

    @media (max-width: 400px) {
        padding: ${({ theme }) => theme.espacamento[7]}px ${({ theme }) => theme.espacamento[0]}px;

        h1 {
            height: 35px;
            width: auto;
            margin: 0 ${({ theme }) => theme.espacamento[5]}px;
            font-size: 1.2rem;
        }
    }
`