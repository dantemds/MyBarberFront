import styled from "styled-components"

export const DetalhesAgendamentoSC = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .2);
    margin-top: -64px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > div {
        color: #202020;
        width: 400px;
        height: auto;
        padding: 16px;
        border-radius: 5px;
        background-color: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, .2);
        display: flex;
        flex-direction: column;
        align-items: center;

        div:nth-child(1) {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            > button {
                color: #202020;
                width: 32px;
                height: 32px;
                border: none;
                border-radius: 50%;
                margin-right: 0;
                cursor: pointer;
                font-weight: 900;
                background-color: #ddd;
            }

            > h3 {
                width: 80%;
                color: #202020;
                padding: 8px 0 0 0;
                text-align: center;
                font-weight: 900em;
                font-size: 1.5rem;
                word-break: keep-all;
                margin: auto;
            }

        }

        div:nth-child(2) {
            padding: 32px 0;

            a {
                color: #202020;
            }

            table, td {
                color: #202020;
                border-bottom: 1px solid #ddd;
                border-collapse: collapse;
            }

            tr {
                /* text-align: center; */

                td:nth-child(1) {
                    color: #3871C1;
                    font-weight: 900;
                    text-transform: uppercase;
                }

                td:nth-child(2) {
                    font-size: 1em;
                    word-break: break-all;
                }
                
                td {
                    padding: 8px;
                    max-width: 250px;
                }
            }

        }
        
        .btn-Cancelar {
            color: #fff;
            padding: 8px;
            border: none;
            cursor: pointer;
            font-weight: 600;
            border-radius: 5px;
            box-shadow: 0 0 5px rgba(0, 0, 0, .1);
            background-color: #3871C1;

        }
    }
    
    @media (max-width: 500px){
        > div {
            width: 100%;
            margin: 0 1rem;
        }
    }

`