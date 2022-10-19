import styled from "styled-components";

export const HeaderSC = styled.header`
    /* background-color: ${({ theme }) => theme.cores.primaria}dd; */
    background-color: #202020dd;
    color:${({ theme }) => theme.cores.textoPrimario};
    position: fixed;
    display: flex;  
    width: 100vw;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    z-index: 1000;
    border-bottom: 2px solid ${({ theme }) => theme.cores.secundaria};

    .Cabecalho-Logo {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 1.3rem;
    }

    .Cabecalho-Logo img {
        width: auto;
        height: 35px;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1rem;
        list-style: none;
        font-size: 1.4rem;
        font-weight: 600;
        /* font-family: 'nunito', sans-serif !important; */
    }

    li {
        padding: .2rem .5rem;
        z-index: 800;
    }

    a {
        color: #fff;
        text-underline-offset: 5px;
        text-decoration-color: ${({ theme }) => theme.cores.primaria}; 
        text-decoration-color: transparent; 
        border: none;
        transition: all .3s;
    } 
    
    a:hover {
        text-decoration: underline;
        text-decoration-color:  ${({ theme }) => theme.cores.secundaria}; 
        text-shadow: ${({ theme }) => theme.sombras.texto};
    }

    button {
        display:none;
    }

    @media (max-width: 768px) {
        justify-content: space-between;

        .Cabecalho-Logo {
            margin-left: 8px;
        }

        > div {
            padding: 8px 16px;
        }
        
        ul {
            position: absolute;
            top: 50px;
            background-color: rgba(20, 20, 20, .8);
            display: flex;
            flex-direction: column;
            gap: 0px;
            width: 100%;
            height: 0px;        
            left: 0;
            visibility: hidden;
            border-radius: 0 0 8px 8px;
            overflow-y: hidden;
            transition: all .2s;
            z-index: 1000;
            font-size: 1rem;
        }

        button {
            display: flex;
            padding: .5rem 1rem;
            color: ${({ theme }) => theme.cores.textoPrimario};
            border: none;
            background: none;
            cursor: pointer;

            div {
                width: 20px;
                z-index: 1100;
                display: block;
                transition: .2s;
                border-top: 2px solid;
            }

            div::after, div::before {
                position: relative;
                display: block;
                content: '';
                width: 20px;
                height: 2px;
                margin-top: 5px;
                transition: .2s;
                background: currentColor;
            }

            div {
                ${props => props.menu.div}
            }

            div::after {
                ${props => props.menu.divAfter}
            } 
            
            div::before {
                ${props => props.menu.divBefore}
            } 
        }

        ul {
            ${props => props.menu.modalUl}    
            box-shadow: ${({ theme }) => theme.sombras.texto};  
        }

        li {
            width: 80%;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: center;
            text-shadow: none;
            padding: 1rem 0;
        }

        a:hover {
            text-decoration-color: transparent;
        }
    }
`;