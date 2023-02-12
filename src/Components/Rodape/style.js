import styled from "styled-components";

export const RodapeSC = styled.footer`
    
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 32px;
        background-color: ${({ theme }) => theme.cores.primaria};

    p {
        color: #fff;
        font-size: .8rem;
        font-weight: 300;
    }

    @media (max-width: 768px) {
        p {
            font-size: .6rem;
        }
    }
`