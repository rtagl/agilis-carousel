import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #ddd;
  font-family: 'Roboto Condensed', sans-serif;
}

`;

export default GlobalStyles;
