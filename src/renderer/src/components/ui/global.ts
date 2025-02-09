import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font: 14px 'Open Sans', sans-serif;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    align-items: 'center';
    justify-content: 'center';
  }
`;