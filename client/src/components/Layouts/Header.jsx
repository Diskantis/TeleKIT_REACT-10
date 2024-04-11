import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

import LogoutSVG from "../Icons/LogoutSVG";
import BackSVG from "../Icons/BackSVG";

import DateNow from "../CompUI/DateNow";
import Clock from "../CompUI/Clock";

import { LOGIN_ROUTE, MAIN_ROUTE } from "../../routers/Routes";

const Header = () => {
  const navigate = useNavigate();

  // const lastName = localStorage.getItem("last_name");
  // const firstName = localStorage.getItem("first_name");
  // const surName = localStorage.getItem("sur_name");

  const logOut = () => {
    // user.setUser({});
    // user.setIsAuth(false);
    navigate(LOGIN_ROUTE);
    // localStorage.clear();
  };

  return (
    <HeaderStyled>
      <HeaderNav>
        <LogoutSVG active="true" onClick={() => logOut()} />
        <LogoLink to={MAIN_ROUTE}>TeleKIT</LogoLink>
        <BackSVG active="true" onClick={() => navigate(-1)} />
      </HeaderNav>
      )
      <HeadBar>
        <AuthUser>
          {/*{user.isAuth*/}
          {/*  ? `Пользователь: ${lastName} ${firstName[0]}.${surName[0]}.`*/}
          {/*  : ""}*/}
        </AuthUser>
        <DateNow />
        <Clock />
      </HeadBar>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background: ${Color.gradient_head_foot_bg};
`;

const HeaderNav = styled.div`
  width: 290px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeadBar = styled.div`
  width: calc(100vw - 330px);
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthUser = styled.div`
  width: 27.33vw;
  text-align: left;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "1.4rem", weight: 600 })}
`;

const LogoLink = styled(Link)`
  text-decoration-line: none;
  cursor: pointer;
  color: ${Color.body_text};
  ${mixinFontFamily("Roboto")}
  ${mixinFontParams({ size: "2rem", weight: 600 })}
  transition: all 0.2s ease-out;
  padding-top: 1px;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
    text-decoration-line: none;
  }
`;

export default Header;