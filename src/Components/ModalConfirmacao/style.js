import styled from "styled-components"

export const ModalConfirmacaoSC = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    background-color: rgba(0, 0, 0, .2);

    > div {
        width: 400px;
        height: 250px;
        padding: 16px;
        margin: auto;
        display: flex;
        border-radius: 5px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;

        h1 {
            width: 100%;
            padding: 8px;
            text-align: center;
            font-weight: 400;
            font-size: 1.4em;
            font-family: 'Quicksand', sans-serif;
            border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
        }

        p {
            margin: 0 32px;
        }

        
        div:nth-child(3) {
            

            button {
                border: none;
                cursor: pointer;
                font-weight: 800;
                padding: 8px 32px;
                border-radius: 5px;
                box-shadow: 0 0 5px rgba(0, 0, 0, .2)
            }

            button:nth-child(2) {
                color: #fff;
                background-color: red;
                margin-left: 24px;
            }
        }

    }

`