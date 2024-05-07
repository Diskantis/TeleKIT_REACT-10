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

  video {
      position: absolute;
      top: 50%;
      left: 50%;
      width: auto !important;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
  }
`;
