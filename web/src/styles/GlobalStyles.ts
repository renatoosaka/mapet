import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background-color: #ebf2f5;
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
    --color-text: #333;
    --color-green: #00B828;
    --color-red: #D71313;
    --color-background: #fafafa;
    --color-border: #ddd;
  }
`
