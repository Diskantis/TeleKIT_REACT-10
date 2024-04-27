import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

import { Color } from "./style_constants";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  #root {
    width: 100vw;
    height: 100vh;
    background-color: ${Color.body_bg};
  }
`;
