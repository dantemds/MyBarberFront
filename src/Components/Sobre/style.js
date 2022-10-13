import styled from "styled-components";

export const SobreSC = styled.section`
    padding: 64px 16px !important;
    color: #fff;
    background-color: #202020;
    background-image: linear-gradient(to bottom right, rgb(20, 20, 20), #505050);
    
    > div {
        max-width: 1200px;
        display: flex;
        flex-direction: column;
        margin: auto;

        > h2 {
            width: 100%;
            height: auto !important;
            font-weight: 200;
            font-size: 2rem !important;
            font-family: 'Nunito', sans-serif;
            font-weight: 900;
            text-align: center;
            padding: 0 24px;
            color: #fff;
        }

        h3 {
            text-align: center;
            font-size: 1.5rem;
            margin-top: 64px;
        }
        
        p {
            font-size: 1rem !important;
            margin: 0 !important;
            margin-top: 1em !important;

            text-decoration: underline ${({ theme }) => theme.cores.secundaria};

            /* border: 1px dotted hotpink; */
        }

        .Fotos-wrap-content {
            display: flex;
            height: 100%;
            width: 100%;
        }

        .scroll-horizontal {
            display: flex;
            flex-direction: row;
            justify-content: start;
            gap: 2rem;
            padding: 16px 0 0 0;
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

        .fotos-barbearia {
            z-index: 900;
        }

        .fotos-barbeiro {
            z-index: 0;
            justify-content: center;
        }

        .fotos-barbearia img {
            max-height: 270px;
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
                /* width: 100%; */
                /* height: 100%; */
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

        > div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
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
            text-decoration: underline ${({ theme }) => theme.cores.secundaria};

    }

    
    @media (max-width: 800px) {
        padding: 0 ${({ theme }) => theme.espacamento[3]}px;

        > div {
            height: auto;

            > div {
                flex-direction: column;

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

            .fotos-barbeiro {
                    z-index: 0;
                    justify-content: start;

                    div {

                        picture {
                            /* width: 100%; */
                            height: 96px;
                            width: 96px;
                            /*height: 128px;
                            overflow: hidden;
                            border-radius: 100px;
                            border: 1px solid ${({ theme }) => theme.cores.secundaria};
                            box-shadow: .3em .3em 1em rgba(0, 0, 0, 0.4); */
                            
                            img {
                                width: 96px;
                                height: 96px;
                                margin-top: .8rem;
                            }
                        }
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

            h3 {
                margin-top: 48px;
            }

            .Fotos-texto {
                padding: 0;

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