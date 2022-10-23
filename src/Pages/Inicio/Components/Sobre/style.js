import styled from "styled-components";

export const SobreSC = styled.section`
    padding: 64px 24px !important;
    color: #fff;
    background-color: #202020;
    background-image: linear-gradient(to bottom right, rgb(20, 20, 20), #505050);
    
    .content-sobre {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin: auto;

        h2 {
            width: 100%;
            height: auto;
            font-size: 2.5rem;
            /* font-family: 'Nunito', sans-serif; */
            font-weight: 900;
            padding: 0 24px;
            color: #fff;
        }

        h3 {
            font-size: 1.5rem;
            margin-top: 64px;
        }

        .h3Barbeiros {
            margin-top: 48px;
        }

        p, a {
            color: #fff;
            font-size: 1rem;
            font-weight: 300;
            margin: 0;
            margin-top: 1em;
            text-decoration: underline ${({ theme }) => theme.cores.secundaria};
        }

        .pHorarioFuncionamento {
            margin-top: 0;
        }

        .pHorarioFuncionamento:nth-child(1) {
            margin-top: 1em;
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }

        .wrap-infos-texto {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
        }

        .wrap-titulo-texto {
            width: 300px;
            margin: 0 3rem;
            flex-direction: column;
        }

        .scroll-horizontal {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 2rem;
            padding: 16px 0 ;
            overflow-x: auto;
            overscroll-behavior-inline: contain;

            scroll-snap-type: inline mandatory;
            scroll-snap-align: start;
        }

        .scroll-horizontal::-webkit-scrollbar {
            width: 0 !important
        }

        .scroll-horizontal {
            overflow: -moz-scrollbars-none; 
        }

        .scroll-horizontal {
            -ms-overflow-style: none; 
        }

        .fotos-barbearia img {
            max-height: 320px;
            border: 1px solid ${({ theme }) => theme.cores.secundaria};
            border-radius: .5rem;
            box-shadow: .3em .3em 1em rgba(0, 0, 0, 0.4);
        }

        .fotos-barbeiro div {
            width: auto;
            height: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;

            picture {
                width: 128px;
                height: 128px;
                overflow: hidden;
                border-radius: 100px;
                border: 1px solid ${({ theme }) => theme.cores.secundaria};
                box-shadow: .3em .3em 1em rgba(0, 0, 0, 0.4);

                img {
                    width: 128px;
                    height: 128px;
                    margin-left: 0rem;
                    object-fit: contain;
                    scale: 1.3;
                    margin-top: 1rem;
                }
            }

            p {
                font-weight: 300;
            }
        }
    }
    
    @media (max-width: 800px) {
        .content-sobre {
        
            .wrap-infos-texto {
                flex-direction: column;
                margin: 0;
            }

            .wrap-titulo-texto {
                width: 100%;
                margin: 0;
            }
        }
    }

    @media (max-width: 400px) {
        .content-sobre {
            h2 {
                font-size: 2rem;
            }
        }
    }
`