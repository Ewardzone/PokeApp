import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        margin: 0;
        user-select: none;
        background-color: lightblue;
        font-family: 'Dosis', sans-serif;
        -webkit-tap-highlight-color: transparent;

    }
`;
export default GlobalStyles;
