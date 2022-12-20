import styled from "styled-components"

export const ModalRequestsEventosSC = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    display: flex;
    background-color: rgba(0, 0, 0, .2);
    z-index: 500;

    > div {
        width: 400px;
        height: auto;
        display: flex;
        margin: auto;
        padding: .5rem 0 1rem 0;
        border-radius: 5px;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-color: #fff;
        z-index: 800;
        gap: 2rem;

        h1 {
            width: 90%;
            text-align: center;
            font-weight: 900;
            font-size: 2rem;
        }

        
        .wrapDadosRequest {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: start;

            .wrapDado {
                width: 90%;
                display: flex;
                margin: auto;
                padding: .5rem 0;
                border-bottom: 1px solid #f2f2f2;

                h2 {
                    font-weight: 700;
                    font-size: 1rem;
                }
    
                label {
                    font-size: 1rem;
                    margin-left: .5rem;
                }
            }
        }
        
        table {
            width: 90%;
            border-collapse: collapse;
            
            tr:nth-child(2n) {
                background-color: #f2f2f2;
            }
            
            th {
                text-align: start;
            }
            
            td, th {
                width: 50%;
                padding: .3rem .5rem;
            }
        }
        
        p {
            width: 90%;
            text-indent: .5rem;
            text-align: justify;
            font-size: .9rem;
        }
        
        button {
            color: #fff;
            padding: .5rem 2rem;
            border: 1px solid #B78860;
            border-radius: 20px;
            background-color: #B78860;
            transition: all .2s;
            cursor: pointer;
        }
        
        button:hover {
            background-color: transparent;
            color: #B78860;
        }

        .Sucesso {
            color: green;
        }
        
        .Falha {
            color: red;
        }
    }

@media (max-width: 800px){
    > div {
        width: 100%;
        margin: auto 1rem;
    }
}

`