import React from "react";
import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../../styles/style_constants";

const CustomButton = ({ name, type, width, onClick }) => {
  return (
    <ButtonSubStyled type={type} $width={width} onClick={onClick}>
      {name}
    </ButtonSubStyled>
  );
};

export default CustomButton;

const ButtonSubStyled = styled.button`
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "0.9rem", spacing: "0.1rem" })}
  display: inline-block;
  width: ${(props) => props.$width};
  height: 36px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  text-transform: uppercase;
  color: ${Color.body_text};
  background-color: ${Color.btn_submit};
  padding: 0 20px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${Color.btn_submit_hover};
  }
  &:active {
    background-color: ${Color.body_text};
    color: ${Color.body_bg};
  }
`;

export const BtnEdit = styled(ButtonSubStyled)`
  display: flex;
  justify-content: center;
  width: 34px;
  height: 34px;
  align-items: center;
  border: 1px solid ${Color.table_text};
  border-radius: 8px 0 0 8px;
  color: ${Color.table_text};
  background-color: transparent;
  padding: 0;
  margin: 0;
  &:hover {
    color: ${Color.body_text};
    background-color: ${Color.btn_edit_green};
  }
  &:active {
    background-color: #f8f9fa;
    color: ${Color.body_bg};
  }
`;

export const BtnDel = styled(BtnEdit)`
  border-radius: 0 8px 8px 0;
  &:hover {
    background-color: ${Color.btn_delete_red};
  }
  &:active {
    background-color: #f8f9fa;
    color: ${Color.body_bg};
  }
`;
