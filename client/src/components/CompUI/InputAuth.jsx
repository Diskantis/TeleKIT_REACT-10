import React from "react";
import { useController } from "react-hook-form";

import { styled } from "styled-components";
import {
  Color,
  mixinFontFamily,
  mixinFontParams,
} from "../../styles/style_constants";

const InputAuth = ({ name, label, selInput, type, control }) => {
  const { field } = useController({
    name,
    control,
  });
  return (
    <InputContainer>
      <Input
        id={name}
        name={field.name}
        type={type}
        value={field.value}
        selected={selInput}
        onChange={field.onChange}
      ></Input>
      <Label>{label}</Label>
    </InputContainer>
  );
};

export default InputAuth;

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
    props.selected === props.name || props.value !== ""
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
    props.selected === props.name || props.value !== ""
      ? `${mixinFontParams({ size: "0.8rem", height: "1rem" })}`
      : `${mixinFontParams({ size: "1rem", height: "1rem" })}`};
  color: ${(props) =>
    props.selected === props.name || props.value !== ""
      ? `${Color.btn_submit}`
      : `${Color.body_text}`};
  transform: translate(0, 0);
  cursor: text;
  position: relative;
  left: 20px;
  bottom: ${(props) =>
    props.selected === props.name || props.value !== "" ? "60px" : "34px"};
  transition: all 0.15s ease-out;
`;
