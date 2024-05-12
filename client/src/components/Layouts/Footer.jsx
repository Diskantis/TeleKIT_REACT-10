import React from "react";

import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

const Footer = () => {
  return (
    <FooterStyled>
      {"© "}
      {new Date().getFullYear()}
      {""}
    </FooterStyled>
  );
};

export default Footer;

const FooterStyled = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${Color.gradient_head_foot_bg};
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1rem", weight: 600, spacing: "2px" })}
    cursor: default;
`;
