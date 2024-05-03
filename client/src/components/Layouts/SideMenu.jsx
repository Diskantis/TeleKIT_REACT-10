import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components/macro";
import { Color } from "../../styles/style_constants";

const SideMenu = ({ items }) => {
  return (
    <SideMenuULStyled>
      {items.map((item) => (
        <SideMenuLIItemStyled key={item.name}>
          <SideMenuItemStyled to={item.link}>
            {item.icon}
            {item.name}
          </SideMenuItemStyled>
        </SideMenuLIItemStyled>
      ))}
    </SideMenuULStyled>
  );
};

export default SideMenu;

const SideMenuULStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SideMenuLIItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border-radius: 0 10px 10px 0;
    background-color: ${Color.sidebar_sel_hover};
  }
`;

const SideMenuItemStyled = styled(Link)`
  display: flex;
  align-items: center;
  margin-left: 15px;
  text-decoration-line: none;
  color: ${Color.body_text};
  cursor: pointer;
  gap: 10px;
`;
