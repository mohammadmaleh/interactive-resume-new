import { createGlobalStyle } from "styled-components";
import { darkBlack, white, blue, grey, lightBlack } from "./constants/colors";
import LatoThin from "./assets/fonts/Lato/Lato-Thin.ttf";
import LatoLight from "./assets/fonts/Lato/Lato-Light.ttf";
import LatoRegular from "./assets/fonts/Lato/Lato-Regular.ttf";
import LatoBold from "./assets/fonts/Lato/Lato-Bold.ttf";
import LatoBlack from "./assets/fonts/Lato/Lato-Black.ttf";
import LatoItalic from "./assets/fonts/Lato/Lato-Italic.ttf";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lato';
    src: url(${LatoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoBlack}) format('truetype');
    font-weight: 900;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Lato';
    src: url(${LatoItalic}) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  body {
    background-color:${darkBlack};
    margin: 0;
    padding: 0;
  }
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
  }
  html{
    font-family: 'Lato', 'Arial', sans-serif;
    font-weight: 300;
    font-size: 10px;
    text-rendering: optimizeLegibility;
  }
  p,a{
    color:${white}
  }
  button:focus {
    outline: none !important;
  }
  .blue-text{
    color:${blue}
  }

  /* Themed scrollbars (Firefox) */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${grey} transparent;
  }
  /* Themed scrollbars (WebKit / Chromium) */
  *::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${grey};
    border-radius: 8px;
    border: 2px solid ${lightBlack};
  }
  *::-webkit-scrollbar-thumb:hover {
    background-color: ${blue};
  }
  *::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export default GlobalStyle;
