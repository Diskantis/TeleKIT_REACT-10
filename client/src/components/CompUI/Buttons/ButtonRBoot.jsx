import React from "react";
import styled from "styled-components/macro";

import { Button as ButtonBoot } from "react-bootstrap";
import {
  Color,
  mixinFontFamily,
  mixinFontParams,
} from "../../../styles/style_constants";

const ButtonRBoot = ({ name, variant, type, width, onClick }) => {
  return (
    <ButtonStl variant={variant} type={type} $width={width} onClick={onClick}>
      {name}
    </ButtonStl>
  );
};

export default ButtonRBoot;

const ButtonStl = styled(ButtonBoot)`
  width: ${(props) => props.$width};
  height: 36px;
  background-color: ${Color.btn_submit};
  color: ${Color.body_text};
  text-transform: uppercase;
  ${mixinFontFamily("Roboto")};
  ${mixinFontParams({ size: "0.9rem", spacing: "0.1rem" })};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0 20px;
  transition: all 0.2s ease-in-out;

  &:hover {
    --bs-btn-hover-bg: ${Color.btn_submit_hover};
  }

  &:active {
    --bs-btn-active-bg: ${Color.btn_submit_active};
  }
`;
