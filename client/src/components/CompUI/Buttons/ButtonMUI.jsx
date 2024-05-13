import React from "react";

import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Color } from "../../../styles/style_constants";

const ButtonSubMUI = ({ name, ...props }) => {
  return <ButtonStl {...props}>{name}</ButtonStl>;
};

export default ButtonSubMUI;

const ButtonStl = styled(Button)(({ width }) => ({
  width: width,
  color: Color.body_text,
  backgroundColor: Color.btn_submit,
  "&:hover": {
    color: Color.body_text,
    backgroundColor: Color.btn_submit_hover,
  },
}));
