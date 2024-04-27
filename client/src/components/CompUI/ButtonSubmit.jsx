import React from "react";
import { styled } from "styled-components";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const ButtonSubmit = ({ name, type, onClick }) => {
  return (
    <ButtonSubStyled type={type} onClick={onClick}>
      {name}
    </ButtonSubStyled>
  );
};

export default ButtonSubmit;

const ButtonSubStyled = styled.button`
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "0.9rem", spacing: "0.1rem" })}
  display: inline-block;
  width: ${(props) => (props.$create ? "280px" : "150px")};
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
