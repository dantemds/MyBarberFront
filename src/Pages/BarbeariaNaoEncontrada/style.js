import styled from "styled-components";

export const BarbeariaNaoEncontradaSC = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;

    > div {
        width: auto;
        height: auto;
        margin: auto 1rem;
        padding: 2rem 4rem;

        border-radius: 4px;
        box-shadow: 3px 3px 10px rgba(20, 20, 20, .4);
        background-color: #fff;
        z-index: 500;

        p {
            font-weight: 600;
            margin-top: 1rem;
        }
    }

    img {
        z-index: 0;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }
`