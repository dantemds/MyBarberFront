import styled from "styled-components";

export const AgendaSC = styled.div`
    width: 550px;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .4) inset;
    color: #202020;
    background-color: #d1d1d1;

    @media (max-width: 800px) {
        width: 100%;
        min-width: 350px;
    }
`