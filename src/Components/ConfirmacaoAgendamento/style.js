import styled from "styled-components";

import imageDesktop from '../../Images/Login/Login-background-desktop.jpg'
import imageMobile from '../../Images/Login/Login-background-mobile.jpg'

export const ConfirmacaoAgendamento = styled.section`
    width: 100vw;
    height: 100vh;
    
    > div {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* background-image: linear-gradient(to top left, rgb(0, 0, 0), #444444); */
        
        img {
            width: 100%;
            height: 100%;
            position: absolute;
            background-image: url(${imageDesktop});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            overflow: hidden;
        }

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
            }

            button {
                color: #fff;
                background-color: ${({ theme }) => theme.cores.secundaria};
                border: 2px solid transparent;
                border-radius: 5px;
                padding: 8px;
                margin-top: 32px;
                font-weight: 600;
                cursor: pointer;
                box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            }
        }
    }

    @media (max-width: 768px) {

        > div {

            img {
                background-image: url(${imageMobile});
            }

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