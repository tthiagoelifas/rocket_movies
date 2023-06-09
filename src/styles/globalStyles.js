import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    font-size: 62.5%
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: ${({theme}) => theme.COLORS.BACKGROUND_800};

    -webkit-font-smoothing: antialiased;

    font-family: 'Roboto Slab', serif;
    
  }

`;

export default GlobalStyle;