import styled from "styled-components";

export const MapaSC = styled.section`
       
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: auto;
    padding-bottom: 64px;

    h1 {
        width: 100%;
        height: 54px;
        margin-top: 64px;
        font-weight: 400;
        font-size: 22pt;
        text-transform: uppercase;
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
    }

    iframe {
        width: 600px;
        height: 400px;
        border: 1px solid ${({ theme }) => theme.cores.secundaria};
        border-radius: 5px;
        box-shadow: 0 0 10px ${({ theme }) => theme.cores.secundaria};
    }

    @media (max-width: 768px) {
        
        width: 100%;
        padding: 0 16px;
        padding-bottom: 64px;
        

        h1 {
            font-size: 1.5rem;
            text-align: center;
        }

        iframe {
            height: 250px;
            width: auto;
            background-color: purple;
        }
    }

    @media (max-width: 400px) {
        
        padding: 0 16px 32px 16px;
        
        
        h1 {
            height: 45px;
            font-size: 1.2rem;
        }

        div {
            padding: 0 32px
        }

        iframe {
            width: 100%;
        }
    }
`