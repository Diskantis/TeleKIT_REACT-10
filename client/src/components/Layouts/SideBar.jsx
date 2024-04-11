import React from "react";
import { styled } from "styled-components";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const SideBar = ({ children }) => {
  return <SideBarStyled>{children}</SideBarStyled>;
};

const SideBarStyled = styled.div`
  width: 290px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: ${Color.sidebar_bg};
  margin: 10px 0;
  padding: 30px 15px 15px 0;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({
    size: "1rem",
    height: 1.6,
    spacing: "0rem",
  })}
`;

export default SideBar;
