import styled from "styled-components"

export const CardAgendamentoStyle = styled.div`
    width: 100%;
    height: 100px;
    background-color: #fff;
    background-color: rgba(255, 255, 255, .85);
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    gap: 16px;
    padding: 8px;
    cursor: pointer;
    box-shadow: 0 0 5px rgba(0, 0, 0, .2);
    transition: all .2s;

    :hover {
        background-color: rgba(255, 255, 255, .95);
    }

    > div {
        color: #000;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        font-size: 1rem;
        text-align: center;
        
        h3 {
            color: #222;
            text-align: center;
        }

        div {
            display: flex;
            align-items: center;
            justify-content: center;
            word-break: keep-all;   
        }
    }

    > div:nth-child(2) {
        border-left: 1px dotted #555;
        border-right: 1px dotted #555;
    }

    @media (max-width: 800px) {
        > div {
            font-size: .8rem;
        }
    }
`