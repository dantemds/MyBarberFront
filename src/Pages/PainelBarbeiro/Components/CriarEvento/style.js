import styled from "styled-components";

export const CriarEventoSC = styled.section`
.mainContent {
    /* background-color: red; */
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    padding: 3rem 0px;
    color: #202020;

    /* background-color: red; */

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: ${({ theme }) => theme.espacamento[5]}px;

        input, select {
            width: 400px;
            height: 2.5rem;
            font-size: .9rem;
            padding: 0 12px;
            margin-bottom: 2.5rem;
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.cores.secundaria};
            background-color: #fafafa;
        }

        input:focus, select:focus {
            outline: 0;
            box-shadow: 0 0 10px rgba(20, 20, 20, .3);
            border-bottom: 3px solid ${({ theme }) => theme.cores.secundaria};
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover, 
        input:-webkit-autofill:focus, 
        input:-webkit-autofill:active{
            -webkit-transition: background-color 9999s ease-out;
        }
        button[type=submit] {
            height: 3rem;
            width: 100%;
            max-width: 400px;
            color: #fff;
            border: none;
            border-radius: 50px;
            font-size: 1.5rem;
            text-decoration: none;
            text-shadow: ${({ theme }) => theme.sombras.texto};
            text-transform: uppercase;
            font-weight: 400;
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            background-color: ${({ theme }) => theme.cores.secundaria};
            cursor: pointer;
        }

    }

    h2 {
        width: 100%;
        height: auto;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        padding: 0 24px;
        color: #202020;
    }
    @media (max-width: 800px) {

h2 {
    font-size: 2rem;
}

form {
    margin-top: 1rem 0 2rem 0;

    .mensagem-erro {
        width: 100%;
    }

    input, label, select, h2 {
        width: 100%;
        max-width: 400px;
    }
}
}
    
}

`