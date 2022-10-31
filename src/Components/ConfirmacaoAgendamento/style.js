import styled from "styled-components";


export const ConfirmacaoAgendamento = styled.section`
    width: 100vw;
    height: 100vh;
    color: #202020;

    img {
        z-index: 0;
        position: absolute; 
        top: 0;
        width: 100vw;
        height:100vh;
    }
    > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
            width: 600px;
            padding: 32px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            z-index: 500;

            h1 {
                color: rgb(43, 43, 43);
                text-align: center;
                font-size: 2rem;
                text-transform: uppercase;
                margin-bottom: 32px;
                padding-bottom: 8px;
                border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
                width: 100%;
            }

            p {
                font-size: 1.5rem;
                font-weight: 300;
                text-align: center;

                span {
                    font-weight: 600;
                }
            }

            button {
                color: #fff;
                background-color: ${({ theme }) => theme.cores.secundaria};
                border: 2px solid transparent;
                border-radius: 50px;
                padding: 1rem 2rem;
                margin-top: 32px;
                font-weight: 400;
                cursor: pointer;
                box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            }
        }
    }

    @media (max-width: 768px) {

        > div {

            > div {
                width: 100%;
                margin: 0 16px;

                h1 {
                    font-size: 1.3rem;
                }

                p {
                    font-size: 1.1rem;
                }
            }
        }
    }
`