import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    html {
        scroll-behavior: smooth;
        background-color: #f2f2f2;
    }

    body {
        display: flex;
        margin-top: 0;
    }

    body::-webkit-scrollbar-track {
        background: #eeeeee;  
    }
    
    body::-webkit-scrollbar-thumb {
        background-color: #b4b4b4;
        border-radius: 20px;
        border: 3px solid #eeeeee;
    }

    #root {
        width: 100%;
    }
`;