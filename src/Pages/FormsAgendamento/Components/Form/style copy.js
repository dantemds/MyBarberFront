import styled from "styled-components";

export const FormAgendamentoSC = styled.section`
    min-height: 100vh;
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

        input, label, select {
            height: 2.5rem;
            width: 400px;
            /* border-radius: 5px; */
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.cores.secundaria};
            font-size: 1rem;
            /* background-color: transparent; */

        }

        label {
            color: #202020 !important;
            border: none;
            height: 1.5rem;
            font-weight: 600;
            font-size: 1.2rem;
        }

        select {
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
        }

        .select-barbeiro {
            margin-bottom: 2rem !important;
        }

        option {
            /* background-color: #fff; */
        }

        input {
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
            padding: ${({ theme }) => theme.espacamento[2]}px;
        }

        input:focus, select:focus {
            background-color: rgba(20, 20, 20, .05);
            outline: 0;
        }

        .mensagem-erro {
            width: 400px;
            color: red;
            margin-top: -56px;
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
            text-align: left;
        }

        .WrapFotoBarbeiro {
            width: auto;
            height: auto;
            background-color: ${({ theme }) => theme.cores.secundaria};
            border: 4px solid ${({ theme }) => theme.cores.secundaria};
            box-shadow: 0 0 10px ${({ theme }) => theme.cores.secundaria};
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
            border-radius: 50%;
            overflow: hidden;

            div {
                width: 200px;
                height: 200px;
                
                img {
                    width: auto;
                    height: auto;
                }
            }
        }

        .WrapCalendario {
            width: 400px;
            height: auto;
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
        }

        .Calendario {
            width: 100%;
            height: 100%;
            margin-top: 8px;
            border: none;
            border-radius: 5px;
            box-shadow: 0 0 10px ${({ theme }) => theme.cores.secundaria};
            font-family: 'Outfit', sans-serif;
        }

        abbr {
            text-decoration: none;
            font-size: .8rem;
        }

        .react-calendar__navigation__label__labelText{
            font-size: .8rem;
        }

        .WrapListaHorarios {
            width: 400px;
            min-height: 100px;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            font-weight: 500;
            border-radius: 5px;
            border: 1px solid ${({ theme }) => theme.cores.secundaria};
            box-shadow: 0 0 10px rgba(0, 0, 0, .2) inset;
            list-style: none;
            padding: 16px;
            margin-bottom: ${({ theme }) => theme.espacamento[7]}px;
            
            
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
                    padding: 8px;
                    text-align: center;
                    border: 2px solid ${({ theme }) => theme.cores.secundaria};
                    border-radius: 5px;
                    font-weight: 500;
                    font-size: 1rem;
                    text-shadow: ${({ theme }) => theme.sombras.texto};
                    color: #fff;
                    padding: ${({ theme }) => theme.espacamento[2]}px;
                    background-color: ${({ theme }) => theme.cores.secundaria};
                    box-shadow: 0 0 10px rgba(0, 0, 0, .1);
                    transition: all .3s;
                    cursor: pointer;
                }
    
                li:hover, .liSelecionado {
                    background-color: #fff;
                    color: ${({ theme }) => theme.cores.secundaria};
                }
    
                div {
                    width: 100%;
                    display: flex;
                    align-items: center;
                    padding: 8px;
    
                    p {
                        width: 100%;
                        text-align: center;
                        vertical-align: middle;
                    }
                } 
            }
        }
        
        button[type=submit] {
            height: auto;
            padding: 1rem 4rem;
            color: #fff;
            border: none;
            border-radius: 50px;
            font-size: 1.5rem;
            background-color: #00c943;
            text-decoration: none;
            text-shadow: ${({ theme }) => theme.sombras.texto};
            text-transform: uppercase;
            font-weight: 400;
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            cursor: pointer;
        }
        
        input[type=submit].Btn-disabled {
            background-color: rgba(0, 0, 0, .4);
            cursor: default;
        }
        
    }

    @media (max-width: 800px) {
        padding: 16px;

        h2 {
            /* height: 45px;
            font-size: 1.5rem;
            text-align: center; */
            font-size: 2rem;
        }

        form {
            margin: 0;
            margin-top: ${({ theme }) => theme.espacamento[7]}px;

            .mensagem-erro {
                width: 100%;
            }

            input, label, select, .WrapListaHorarios, .WrapCalendario {
                width: 100%;
                max-width: 400px;
                /* font-size: 1rem; */
            }

        }
    }

    @media (max-width: 400px) {
        padding: 16px;

        h2 {
            /* height: 35px;
            font-size: 1.2rem; */
        }

        

        form {
            margin-top: ${({ theme }) => theme.espacamento[6]}px;

            .WrapListaHorarios{
                li {
                    button {
                        font-size: .8rem;
                    }
                }
            } 

            label {
                /* font-size: 1.2rem; */
            }

            input, select {
                /* font-size: 1rem; */
                color: rgba(20, 20, 20, .7)
            }
        }
    }
`