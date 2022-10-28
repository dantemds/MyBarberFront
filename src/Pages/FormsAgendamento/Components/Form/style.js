import styled from "styled-components";

export const FormAgendamentoSC = styled.section`


    min-height: 90vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin: auto;
    margin-top: 50px;
    padding: ${({ theme }) => theme.espacamento[7]}px 0px;

    h2 {
        width: 100%;
        height: auto;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        padding: 0 24px;
        color: #202020;
    }

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

        .select-barbeiro {
            margin-bottom: 1.5rem;
        }

        .mensagem-erro {
            width: 400px;
            color: red;
            text-align: left;
            font-size: .8rem;
            margin-top: -2.2rem;
            margin-bottom: 2.5rem;
        }

        h3 {
            width: 400px;
            text-align: start;
            font-size: 1.5rem;
            font-weight: 500;
            margin-bottom: .5rem;
        }

        .WrapCalendario {
            width: 400px;
            height: auto;
            margin-bottom: 2.5rem;
            
            .Calendario {
                width: 100%;
                height: 100%;
                border: 1px solid ${({ theme }) => theme.cores.secundaria};

                abbr {
                    text-decoration: none;
                    font-size: .8rem;
                }

                .react-calendar__navigation__label__labelText{
                    font-size: .8rem;
                }
            }
        }

        .WrapListaHorarios {
            width: 400px;
            min-height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            font-weight: 500;
            border: 1px solid ${({ theme }) => theme.cores.secundaria};
            box-shadow: 0 0 10px rgba(0, 0, 0, .2) inset;
            list-style: none;
            padding: 16px;
            margin-bottom: 2.5rem;
            background-color: #e9e9e9;
            
            
            div {
                width: 330px;
                height: 100%;
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                justify-content: space-evenly;
                margin: auto;
                
                li {
                    height: 40px;
                    width: 70px;
                    background-color: transparent;
                    
                    button {
                        width: 100%;
                        height: 100%;
                        padding: 8px;
                        border: 1px solid ${({ theme }) => theme.cores.secundaria};
                        font-weight: 500;
                        font-size: .9rem;
                        box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                        transition: all .3s;
                        background-color: transparent;
                        background-color: #fafafa;
                    }
                }
                
                button:hover, .liSelecionado {
                    background-color: ${({ theme }) => theme.cores.secundaria};
                    color: #fff;
                }
            }

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
        
        .Btn-disabled {
            background-color: rgba(0, 0, 0, .4);
            cursor: default;
        }
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

            input, label, select, .WrapListaHorarios, .WrapCalendario, h3 {
                width: 100%;
                max-width: 400px;
            }
        }
    }

    @media (max-width: 400px) {

        form {
            .WrapListaHorarios{
                li {
                    button {
                        font-size: .8rem;
                    }
                }
            } 
        }
    }
`