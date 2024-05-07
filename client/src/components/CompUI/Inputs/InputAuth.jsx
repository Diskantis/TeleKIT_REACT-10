import React from "react";
import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../../styles/style_constants";

const InputAuth = ({ type, name, value, selInput, ...props }) => {
  return (
    <InputContainer>
      <Input type={type} selected={selInput} value={value} {...props}></Input>
      <Label type={type} selected={selInput} value={value}>
        {name}
      </Label>
    </InputContainer>
  );
};

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem" })}
    background-color: ${Color.input_auth_bg};
  outline: 0;
  box-shadow: none;
  border-style: none;
  border-bottom: ${(props) =>
    props.selected === props.type || props.value !== ""
      ? "2px solid #6ef439"
      : "2px solid #2196f3"};
  margin-bottom: 10px;
  padding-left: 20px;

  &:-webkit-autofill {
    -webkit-text-fill-color: ${Color.body_text};
    -webkit-box-shadow: 0 0 0 40rem ${Color.input_auth_bg} inset;
  }
`;

const Label = styled.label`
  text-align: left;
  ${mixinFontFamily("Roboto")};
  ${(props) =>
    props.selected === props.type || props.value !== ""
      ? `${mixinFontParams({ size: "0.8rem", height: "1rem" })}`
      : `${mixinFontParams({ size: "1rem", height: "1rem" })}`};
  color: ${(props) =>
    props.selected === props.type || props.value !== ""
      ? `${Color.label_auth}`
      : `${Color.body_text}`};
  transform: translate(0, 0);
  cursor: text;
  position: relative;
  left: 20px;
  bottom: ${(props) =>
    props.selected === props.type || props.value !== "" ? "60px" : "34px"};
  transition: all 0.15s ease-out;
`;

export default InputAuth;
