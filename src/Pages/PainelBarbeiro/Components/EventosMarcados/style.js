import styled from "styled-components";

export const EventosMarcadosSC = styled.section`
    min-height: 100vh;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-top: 50px;
    padding: 3rem 0px;
    color: #202020;

    
    h2 {
        width: 100%;
        height: auto;
        font-size: 2.5rem;
        font-weight: 900;
        text-align: center;
        padding: 0 24px;
        margin: 2.5rem 0;
    }
    #selectDia {
            width: 200px;
            height: 2.5rem;
            font-size: .9rem;
            border: none;
            border-bottom: 1px solid ${({ theme }) => theme.cores.secundaria};
            background-color: #fafafa;
            margin-bottom: 2.5rem;
        }

    header {
        width: 550px;
        
        display: flex;
        margin: auto;
        padding: 1rem .5rem;
        border-radius: 5px 5px 0 0;
        background-color: #3871C1;

        div {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 1.5rem;
            font-weight: 600;
            color: #fff;
        }
    }

    @media (max-width: 800px) {
        padding: 16px;
        #selectDia {
        width: 100%;
        max-width: 1s00x;
    }

        header {
            width: 100%;
            /* min-width: 310px; */

            div {
                font-size: 1.2rem;
            }
        }

        h2 {
            font-size: 2rem;
        }
    }


`