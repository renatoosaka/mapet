import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #333;
    background-color: #ebf2f5;
    height: 100vh;
  }

  body,
  input,
  button,
  textarea {
    font: 600 18px 'Nunito Sans', sans-serif;
  }

  :root {
    --color-light-blue: #31C1E3;
    --color-light-blue-hover: #5CD9F7;
    --color-label: #5B5B5B;
    --color-text: #333;
    --color-green: #00B828;
    --color-green-light: #C6FFD2;
    --color-green-hover: #4CD96A;
    --color-red: #D71313;
    --color-red-light: #FDBABA;
    --color-red-hover: #E16C6C;
    --color-background: #fafafa;
    --color-border: #ddd;
    --color-white: #fff;
    --color-message-map: #81afbb;
  }
`
