import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  a { 
    text-decoration: none;
    cursor: pointer;
  }
  button {
    cursor: pointer;
  }
`;