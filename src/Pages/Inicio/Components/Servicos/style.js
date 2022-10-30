import styled from "styled-components";

export const ServicosSC = styled.section`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding: ${({ theme }) => theme.espacamento[7]}px 0px;

    > h1 {
        width: 100%;
        height: auto;
        font-weight: 200;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        color: #202020;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 1.5rem;
        gap: 3rem;
        padding: 0 8rem;
    }

    .Wrap-mais-servicos {
        height: auto;
        width: 300px;
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 1rem;
        padding: 0 0 0 8rem;

        svg {
            width: 12px;
            height: 12px;
        }
    
        a {
            font-size: .8rem;
            color: #202020;
        }
    }



    @media (max-width: 800px) {
        padding: ${({ theme }) => theme.espacamento[7]}px ${({ theme }) => theme.espacamento[4]}px;

        > h1 {
            width: 100%;
            word-wrap: break-word;
            
        }

        ul {
            justify-content: center;
            padding: 0;
            gap: 2rem;
        }

        .Wrap-mais-servicos {
            padding: 0;
        }

       
    }

    @media (max-width: 663px) {
        .Wrap-mais-servicos {
            margin: 1.5rem auto 0 auto;
        }
    }

    @media (max-width: 450px) {
        .Wrap-mais-servicos {
            width: 250px;
            margin: 1.5rem auto 0 auto;
        }
    }

    @media (max-width: 400px) {
        padding: ${({ theme }) => theme.espacamento[7]}px ${({ theme }) => theme.espacamento[0]}px;
        
        > h1 {
            height: auto;
            width: 100%;
            font-size: 2rem;
            padding: 0 24px;            
        }

        ul {
            justify-content: center;
            padding: 0;
        }
    }
`