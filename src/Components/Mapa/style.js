import styled from "styled-components";

export const MapaSC = styled.section`
    
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: auto;
    padding-bottom: 64px;

    /* h1 {
        width: 100%;
        height: 54px;
        margin-top: 64px;
        font-weight: 400;
        font-size: 22pt;
        text-transform: uppercase;
        border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};
    } */

    h1 {
            width: 100%;
            height: auto !important;
            font-weight: 200;
            font-size: 2rem !important;
            font-family: 'Nunito', sans-serif;
            font-weight: 900;
            text-align: center;
            padding: 0 24px;
            margin-top: 64px;
            color: #202020;
        }

    iframe {
        width: 600px;
        height: 400px;
        border: 1px solid ${({ theme }) => theme.cores.secundaria};
        border-radius: 8px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072), 0 41.8px 33.4px rgba(0, 0, 0, .086), 0 100px 80px rgba(0, 0, 0, .12);
    }

    @media (max-width: 768px) {
        
        width: 100%;
        padding: 0 0;
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
        
        padding: 0 16px 64px 16px;
        
        
        h1 {
            height: 45px;
            font-size: 1.2rem;
        }

        div {
            padding: 0 0;
        }

        iframe {
            width: 100%;
        }
    }
`