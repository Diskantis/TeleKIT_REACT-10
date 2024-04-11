import React from "react";
import { styled } from "styled-components";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const InputCreate = ({ children, value, type, width, ...props }) => {
  if (type === "tel") value = value.replace(/[^+\d]/g, "");
  return (
    <div>
      <LabelCreate>{children}</LabelCreate>
      <InputCreateStyled title={value} value={value} width={width} {...props} />
    </div>
  );
};

const LabelCreate = styled.label`
  color: ${Color.table_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", height: 1.5 })}
  margin-bottom: 0.3rem;
`;

const InputCreateStyled = styled.input`
  display: block;
  height: 38px;
  color: ${Color.table_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", height: 1.5 })}
  text-overflow: ellipsis;
  background-color: ${Color.input_create_bg};
  border: 1px solid ${Color.table_inputBorder};
  width: ${(props) => props.width};
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid ${Color.table_text};
    box-shadow: 0 0 0 3px ${Color.input_create_shadow};
  }
`;

export default InputCreate;
