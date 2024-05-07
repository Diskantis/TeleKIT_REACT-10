import React from "react";
import { ConfigProvider, Button } from "antd";
import {
  Color,
  mixinFontFamily,
  mixinFontParams,
} from "../../../styles/style_constants";
import styled from "styled-components/macro";

const ButtonAnt = ({ name, type, width, onClick, loading }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Color.btn_submit,
          colorPrimaryHover: Color.btn_submit_hover,
          colorPrimaryActive: Color.btn_submit_active,
          lineWidthFocus: 1,
        },
      }}
    >
      <ButtonStl
        type={type}
        htmlType="submit"
        $width={width}
        onClick={onClick}
        loading={loading}
      >
        {name}
      </ButtonStl>
    </ConfigProvider>
  );
};

export default ButtonAnt;

const ButtonStl = styled(Button)`
  width: ${(props) => props.$width};
  height: 36px;
  background-color: ${Color.btn_submit};
  color: ${Color.body_text};
  text-transform: uppercase;
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "0.9rem", spacing: "0.1rem" })}
    border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 0 20px;
  transition: all 0.2s ease-in-out;
`;

export const BtnEdit = styled(ButtonStl)`
  display: flex;
  justify-content: center;
  width: 34px;
  height: 34px;
  align-items: center;
  border: 1px solid ${Color.table_text};
  border-radius: 8px 0 0 8px;
  color: ${Color.table_text};
  background-color: transparent;
  padding: 0;
  margin: 0;
  &:hover {
    color: ${Color.body_text};
    background-color: ${Color.btn_edit_green};
  }
  &:active {
    background-color: #f8f9fa;
    color: ${Color.body_bg};
  }
`;

export const BtnDel = styled(BtnEdit)`
  border-radius: 0 8px 8px 0;
  &:hover {
    background-color: ${Color.btn_delete_red};
  }
  &:active {
    background-color: #f8f9fa;
    color: ${Color.body_bg};
  }
`;
