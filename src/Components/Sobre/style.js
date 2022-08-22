import styled from "styled-components";

export const SobreSC = styled.section`
    
    color: #fff;
    background-color: #202020;
    background-image: linear-gradient(to top left, rgb(0, 0, 0), #444444);
    
    > div {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        margin: auto;
        padding: ${({ theme }) => theme.espacamento[7]}px 0;


        h2 {
            width: 100%;
            height: 54px;
            font-weight: 200;
            font-size: 22pt;
            text-transform: uppercase;
            border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
        }

        .Fotos-wrap-content {
            display: flex;
            height: 100%;
            width: 100%;
        }

        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            padding: ${({ theme }) => theme.espacamento[6]}px ${({ theme }) => theme.espacamento[7]}px;
            height: 100%;
            width: 100%;
            
            .Fotos-barbearia {
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-columns:  1fr 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                grid-template-areas: "Fotos-box1 Fotos-box1 Fotos-box1" "Fotos-box2 Fotos-box3";
                column-gap: 12px;
                row-gap: 12px;

               
                .Fotos-picture {
                    display: block;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid ${({ theme }) => theme.cores.secundaria};
                    box-shadow: 0 0 5px ${({ theme }) => theme.cores.secundaria};
                }

                .Fotos-item {
                    opacity: .9;
                    height: 100%;
                    width: 100%;    
                    z-index: 100;
                    object-fit: cover;
                }

                .Fotos-pelicula {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    box-shadow: 0 0 30px rgba(0, 0, 0, 0.7) inset;
                    z-index: 200;

                }

                .Fotos-box1 {
                    grid-area: "Fotos-box1";
                }

                .Fotos-box2 {
                    grid-area: "Fotos-box2";
                    grid-column: 1/3;
                }

                .Fotos-box3 {
                    grid-area: "Fotos-box3";
                }
            }
        }

        .Fotos-texto {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding: 0 32px;    
        }

        .Fotos-texto h1 {
            margin: 16px 0;
            font-weight: 600;
            font-size: 32px;
            text-align: center;

        }

        .Fotos-paragrafos {
            margin-left: 16px;
            line-height: 26px;
            font-weight: 400;
            font-size: 16px;
        }

        .Fotos-paragrafos > p {
            margin-bottom: 32px; 
            text-align: center;
            
        }

        .Fotos-paragrafos p a {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            color: #fff;
            text-decoration: none;
        }

        }

        .Fotos-icons-span {
            margin-left: 8px;
    }

    
    @media (max-width: 800px) {
        padding: 0 ${({ theme }) => theme.espacamento[3]}px;

        > div {
            height: auto;

            > div {
                flex-direction: column;
                padding: ${({ theme }) => theme.espacamento[6]}px ${({ theme }) => theme.espacamento[6]}px;

            }

            h2 {
                font-size: 1.5rem;
                height: 45px;
                width: 100%;
                margin: 0;
                text-align: center;
            }

            .Fotos-texto {
                padding-top: ${({ theme }) => theme.espacamento[5]}px;

                h1 {
                    font-size: 20px;
                }

                p {
                    font-size: 15px;
                }
            }
        }
    }

    @media (max-width: 400px) {
        > div {
            h2 {
                height: 35px;
                font-size: 1.2rem;
            }

            .Fotos-texto {
                padding: 0;
                padding-top: ${({ theme }) => theme.espacamento[5]}px;

                h1 {
                    font-size: 18px;
                }

                p {
                    font-size: 12px;
                }
            }
        }
    }
`