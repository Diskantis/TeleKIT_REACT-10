import { Button, TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

export default function FilledInputMUI() {
  const CssTextField = styled(TextField)(({ inputColor }) => ({
    "& .MuiInputLabel-root": {
      color: inputColor ?? "white",
    },
    "& .MuiFilledInput-root": {
      color: "#ffffff",
      backgroundColor: "#232323",
      borderRadius: 4,
      border: "1px solid",
      borderColor: "#000000",
      "&:hover": {
        backgroundColor: "#bdbdbd",
        color: "#000000",
      },
      "&.Mui-focused": {
        color: "#000000",

        backgroundColor: "#bdbdbd",
      },
    },
    "& .MuiFilledInput-root:after": {
      borderColor: inputColor ?? "red",
    },
    "& label.Mui-focused": {
      color: "#000000", // Change label color when input is focused
    },
    "&:hover label": {
      color: "#000000", // Change label color when input is hovered
    },
  }));

  return (
    <div>
      <CssTextField
        label={"TextField 1"}
        id={"input1"}
        variant="filled"
        defaultValue="Value 1"
        style={{ marginTop: 11, marginRight: 40 }}
        inputColor={"#ffc36a"}
        InputProps={{ disableUnderline: true }}
      />
      <CssTextField
        label={"TextField 2"}
        id={"input2"}
        variant="filled"
        defaultValue="Value 2"
        style={{ marginTop: 11 }}
        inputColor={"#a189ff"}
        InputProps={{ disableUnderline: true }}
      />
    </div>
  );
}
