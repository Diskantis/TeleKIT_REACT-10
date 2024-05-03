import React from "react";
import styled from "styled-components/macro";
import {
  Color,
  mixinFontFamily,
  mixinFontParams,
} from "../../styles/style_constants";

const FormContainer = ({ title, children }) => {
  return (
    <FormContainerStyled>
      <FormTitleStyled>{title}</FormTitleStyled>
      {children}
    </FormContainerStyled>
  );
};

export default FormContainer;

export const FormContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormTitleStyled = styled.div`
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1.3rem" })}
  text-align: center;
  padding: 10px 0;
`;

export const FormContentStyled = styled.div`
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

export const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 20px 0;
  row-gap: 10px;
  column-gap: 20px;
`;
