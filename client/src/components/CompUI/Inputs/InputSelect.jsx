import React, { useState, useRef } from "react";
import { useClickOutside } from "../../Hooks/useClickOutside";

import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../../styles/style_constants";

const InputSelect = ({
  name,
  width,
  value,
  options,
  role,
  setRole,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const bodyRef = useRef(null);
  useClickOutside(bodyRef, () => {
    if (open) setOpen(false);
  });

  return (
    <SelectCreate {...props}>
      <LabelCreate>{name}</LabelCreate>
      <SelectCreate ref={bodyRef} width={width} onClick={() => setOpen(!open)}>
        <SelectHeader
          value={role}
          onChange={(e) => setRole(e.target)}
        ></SelectHeader>
        {open && (
          <SelectBody>
            {options.map((option) => (
              <SelectItem
                key={option.value}
                onClick={() => {
                  if (option.value !== role) {
                    setRole(option.value);
                    setOpen(!open);
                  }
                }}
              >
                {option.value}
              </SelectItem>
            ))}
          </SelectBody>
        )}
      </SelectCreate>
    </SelectCreate>
  );
};

const LabelCreate = styled.label`
  color: ${Color.table_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", height: 1.5 })}
    margin-bottom: 0.3rem;
`;

const SelectCreate = styled.div`
  display: block;
  color: ${Color.table_text};
  width: ${(props) => props.width};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", height: 1.5 })}
    height: 38px;
`;

const SelectHeader = styled.input`
  width: 100%;
  height: 38px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;
  color: ${Color.table_text};
  background-color: ${Color.input_create_bg};
  border: 1px solid ${Color.table_inputBorder};
  border-radius: 0.375rem;
  padding: 0.375rem 0.75rem;
  appearance: none;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat, repeat;
  background-position:
    right 0.5em top 50%,
    0 0;
  background-size:
    0.9em auto,
    100%;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    outline: none;
    border: 1px solid ${Color.table_text};
    box-shadow: 0 0 0 3px ${Color.input_create_shadow};
  }
`;

const SelectBody = styled.ul`
  display: block;
  color: ${Color.table_text};
  background-color: ${Color.input_create_bg};
  border: 1px solid ${Color.table_inputBorder};
  border-radius: 0.375rem;
  margin-top: 5px;
  overflow-y: auto;
  list-style: none;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
`;

const SelectItem = styled.li`
  cursor: pointer;
  padding: 0.1875rem 0.75rem;

  &:first-child {
    padding: 0.375rem 0.75rem 0.1875rem;
  }

  &:last-child {
    padding: 0.1875rem 0.75rem 0.375rem;
  }

  &:hover {
    background-color: #0d6efd;
    color: ${Color.table_text};
  }
`;

export default InputSelect;
