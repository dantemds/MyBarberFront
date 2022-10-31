import styled from "styled-components"

export const AutenticaxaoSC = styled.section`
    width: 100vw;
    height: calc(100vh - 82px);
    background-image: url('');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    overflow: hidden;

    > div {
        width: 100%;
        height: 100%;
        display: flex;
        background-color: rgba(0, 0, 0, .5);
        z-index: 10;
    }
    
    img {
        z-index: 0;
        position: absolute;
        top: 0;
        width: 100vw;
        height: calc(100vh - 82px) ;
    }

    form {
        width: 500px;
        height: auto;
        color: #fff;
        margin: auto;
        display: flex;
        padding: 16px;
        font-size: 1.3rem;
        align-items: center;
        border-radius: 10px;
        flex-direction: column;
        font-family: 'Outfit', sans-serif;
        box-shadow: 0 0 20px rgba(0, 0, 0, .9);
        background-color: rgba(33, 33, 33, .9);
        z-index: 100;

        h1 {
            width: 300px;
            height: 3rem;
            font-size: 1.4em;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 32px;
            border-bottom: 2px solid #B78865;
        }

        label {
            width: 300px;
        }

        label:nth-child(6) {
            color: red;
            font-size: .8em;
        }

        input {
            width: 300px;
            height: 2.5rem;
            color: #fff;
            border: none;
            padding: 8px;
            outline: none;
            margin-top: 4px;
            font-size: 1rem;
            margin-bottom: 16px;
            border-radius: 5px;
            background-color: rgba(0, 0, 0, .4);
        }

        button {
            width: 300px;
            height: 2.5rem;
            color: #fff;
            border: none;
            margin-top: 24px;
            font-weight: 600;
            font-size: 1.2rem;
            border-radius: 5px;
            margin-bottom: 10px;
            background-color: #00c943;
            text-transform: uppercase;
            box-shadow: 0 0 10px rgba(0, 0, 0, .4);
            text-shadow: ${({ theme }) => theme.sombras.texto};
        }
    }

    @media (max-width: 800px) {
        > div {
            padding: 0 16px;
        }

        form {
            width: 100%;
            /* min-width: 320px; */
            font-size: 1.1rem;
        }
    }

    @media (max-width: 400px) {
        form {
            font-size: 1rem;

            input, label, h1, button {
                width: 100%;
            }
        }
    }
`