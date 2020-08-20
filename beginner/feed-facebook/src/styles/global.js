import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    font-family: Helvetica, sans-serif;
  }
`;

export default GlobalStyles;
