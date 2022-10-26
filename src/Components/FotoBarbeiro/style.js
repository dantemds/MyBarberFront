import styled from "styled-components";

export const FotoBarbeiroSC = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2.5rem;

    picture {
        width: 128px;
        height: 128px;
        overflow: hidden;
        border-radius: 100px;
        border: 1px solid ${({ theme }) => theme.cores.secundaria};
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, .034), 0 6.7px 5.3px rgba(0, 0, 0, .048), 0 12.5px 10px rgba(0, 0, 0, .06), 0 22.3px 17.9px rgba(0, 0, 0, .072);


        img {
            width: 128px;
            height: 128px;
            margin-left: 0rem;
            object-fit: contain;
            scale: 1.3;
            margin-top: 1rem;
        }
    }
`