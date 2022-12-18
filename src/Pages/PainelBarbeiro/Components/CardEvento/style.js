import styled from "styled-components"
export const CardEventoStyle = styled.div`
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
    box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
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
        padding: 8px;
        
        div {
            display: flex;
            align-items: center;
            justify-content: center;
            word-break: keep-all;   

            p {
                font-size: 1.1rem;
                font-weight: 600;
                color: #404040;
            }
        }
    }

    > div:nth-child(2) {
        border-left: 1px solid #ddd;
        border-right: 1px solid #ddd;
    }

    @media (max-width: 800px) {
        > div {
            font-size: .8rem;

            div {
                p {
                    font-size: 1rem;
                }
            }
        }
    }
`