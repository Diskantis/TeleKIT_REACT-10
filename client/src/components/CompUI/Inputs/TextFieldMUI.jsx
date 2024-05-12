import React from "react";

import TextField from "@mui/material/TextField";

import { styled } from "@mui/material/styles";
import { Color } from "../../../styles/style_constants";

const TextFieldMUI = ({ name, ...props }) => {
  return <TextFieldStl {...props}>{name}</TextFieldStl>;
};

export default TextFieldMUI;

const TextFieldStl = styled(TextField)(({ theme, width }) => ({
  width: width,
  color: theme.palette.mode === "dark" ? Color.body_text : Color.btn_submit,
  backgroundColor:
    theme.palette.mode === "dark" ? Color.btn_submit : Color.body_text,
  "&:hover": {
    color: Color.body_text,
    backgroundColor: Color.btn_submit_hover,
  },
}));
