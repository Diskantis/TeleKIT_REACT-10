import React from "react";

import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import { Color } from "../../../styles/style_constants";

const ButtonSubMUI = ({ name, variant, width, onClick }) => {
  return (
    <ButtonStl variant={variant} width={width} onClick={onClick}>
      {name}
    </ButtonStl>
  );
};

export default ButtonSubMUI;

const ButtonStl = styled(Button)(({ theme, width }) => ({
  width: width,
  color: theme.palette.mode === "dark" ? Color.body_text : Color.btn_submit,
  backgroundColor:
    theme.palette.mode === "dark" ? Color.btn_submit : Color.body_text,
  "&:hover": {
    color: Color.body_text,
    backgroundColor: Color.btn_submit_hover,
  },
}));
