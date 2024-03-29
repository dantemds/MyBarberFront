import styled from "styled-components";

export const ServicosAgendadosSC = styled.section`
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


    input, label, select, .btn-refresh {
        width: 217px;
        height: 2.5rem;
        font-size: .9rem;
        padding: 0 12px;
        margin-bottom: 2.5rem;
        border: none;
        border-bottom: 1px solid #B78860;
        background-color: #fafafa;
    }

    option {
        background-color: #fafafa;
    }


    input:focus, select:focus {
        outline: 0;
        box-shadow: 0 0 10px rgba(20, 20, 20, .3);
        border-bottom: 3px solid #B78860;
    }

    .btn-refresh {
        color: #fff;
        background-color: #B78860;
        border-radius: 20px;
        border: 1px solid #B78860;
        box-shadow: 0 0 20px rgba(20, 20, 20, .4);
        cursor: pointer;
        transition: all .2s;
    }

    .btn-refresh:hover {
        background-color: transparent;
        color: #B78860;
    }

    header {
        width: 550px;
        display: flex;
        margin: auto;
        padding: 1rem .5rem;
        border-radius: 5px 5px 0 0;
        background-color: #B78860;

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