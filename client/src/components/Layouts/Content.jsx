import React from "react";
import { styled } from "styled-components";
import {
  Color,
  mixinFontFamily,
  mixinFontParams,
} from "../../styles/style_constants";

const Content = ({ title, children, onClick }) => {
  return (
    <ContentStyled onClick={onClick}>
      <ContentTitleStyled>{title}</ContentTitleStyled>
      <ContentContainerStyled>{children}</ContentContainerStyled>
    </ContentStyled>
  );
};

export default Content;

export const ContentStyled = styled.div`
  width: calc(100vw - 330px);
  margin: 10px 0;
  padding-left: 20px;
`;

export const ContentTitleStyled = styled.div`
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

export const ContentContainerStyled = styled.div`
  height: calc(100vh - 145px);
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px;
  border-radius: 10px;
  background-color: ${Color.page_bg};
  font-size: 16px;
  margin-top: 10px;
  //padding: 0 20px 20px;
`;
