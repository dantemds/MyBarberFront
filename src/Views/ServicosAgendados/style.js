import styled from "styled-components";

export const ServicosAgendados = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    padding: ${({ theme }) => theme.espacamento[7]}px 0px;

    h2 {
        width: 100%;
        height: 54px;
        font-family: 'Quicksand', sans-serif;
        font-weight: 400;
        font-size: 22pt;
        text-transform: uppercase;
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
        margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
    }

    input, label, select {
        height: 2.5rem;
        width: 200px;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.cores.secundaria};
        font-size: 1.2rem;
        font-family: 'Outfit', sans-serif;
    }

    label {
        border: none;
    }

    select {
        background-color: #fff;
        margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
    }

    option {
        background-color: #fff;
    }

    input {
        margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
        padding: ${({ theme }) => theme.espacamento[2]}px;
        border-style: solid;
    }

    input:focus, select:focus {
        box-shadow: ${({ theme }) => theme.sombras.componentes} ${({ theme }) => theme.cores.secundaria};
        outline: 0;
    }



    @media (max-width: 800px) {
        padding: 16px;

        h2 {
            height: 45px;
            font-size: 1.5rem;
            text-align: center;
        }
    }

    @media (max-width: 400px) {
        h2 {
            height: 35px;
            font-size: 1.2rem;
        }
    }
`