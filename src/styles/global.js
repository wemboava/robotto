import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    overflow-x: hidden;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Roboto', sans-serif;
    color: #555;
    background-size: 300px;
    background-position: calc(100% + 105px) -112px;
  }

  body, input, button {
    font: 16px 'Oxygen', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  p, h1, h2 {
    text-align: start;
  }

  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-animation: autofill 0s forwards;
    animation: autofill 0s forwards;

    @keyframes autofill {
      100% {
        background: #EEF4FB;
        color: #1b1b1b;
        font-size: 15px;
      }
    }

    @-webkit-keyframes autofill {
      100% {
        background: #EEF4FB;
        color: #1b1b1b;
        font-size: 15px;
      }
    }
  }
`;
