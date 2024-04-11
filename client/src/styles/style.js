import { styled, createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { Color, mixinFontParams, mixinFontFamily } from "./style_constants";

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

//   .form {
//     display: flex;
//     align-items: center;
//     background: #191919;
//     border-radius: 6px;
//     height: 27px;
//     padding: 7px 10px;
//     column-gap: 16px;
//     width: 300px;
//     position: relative;
//     margin-top: 20px;
//   }
//  
//   .input {
//     flex-grow: 1;
//   }
//
//   .input input {
//     font-family: Montserrat, Roboto, sans-serif;
//     font-size: 12px;
//     line-height: 14px;
//     color: #b8b8b8;
//     background: none;
//     border: none;
//     outline: none;
//     width: 100%;
//   }
//
//   .box {
//     z-index: 9;
//     top: 120%;
//     position: absolute;
//     width: 100%;
//     left: 0;
//     max-height: 300px;
//     overflow-y: auto;
//     padding: 12px;
//     display: flex;
//     flex-direction: column;
//     row-gap: 8px;
//     background: #576067;
//     border-radius: 8px;
//   }
//
//   .box::-webkit-scrollbar {
//     display: none;
//   }
`;

export const Page = styled.div`
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`;

export const Content = styled.div`
  width: calc(100vw - 330px);
  margin: 10px 0;
  padding-left: 20px;
`;

export const ContentTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  color: ${Color.body_text};
  border: 1px;
  border-radius: 10px;
  background-color: ${Color.page_title};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1.4rem", weight: 400, style: "italic" })}
`;

export const ContentContainer = styled.div`
  height: calc(100vh - 145px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px;
  border-radius: 10px;
  background-color: ${Color.page_bg};
  font-size: 16px;
  margin-top: 10px;
  padding: 0 20px 20px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitle = styled.div`
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1.3rem" })}
  text-align: center;
  padding: 10px 0;
`;

export const FormContent = styled.div`
  width: calc(100vw - 370px);
  height: calc(100vh - 200px);
  overflow-x: auto;
  overflow-y: auto;
  margin: 0 20px;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    border-radius: 0 0.375rem 0.375rem 0;
    background-color: ${Color.input_create_bg};
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #818181;
  }
`;

export const FormRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 10px;
  column-gap: 20px;
`;
