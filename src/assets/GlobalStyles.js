import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
     html {
        scroll-behavior: smooth;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        text-decoration: none;
        list-style-type: none;
        font-family: "Poppins", sans-serif;
    }

    body {
        box-sizing: border-box;
       
        margin: 0;
        padding: 0;
        background: #131415;
        font-family:'Poppins', 'Courier New';
        color: white;
        -webkit-tap-highlight-color: transparent;
        overflow-x: hidden;
        text-decoration: none;
       
    }

   
`;
