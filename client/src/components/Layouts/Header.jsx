import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components/macro";
import {
  Color,
  mixinFontParams,
  mixinFontFamily,
} from "../../styles/style_constants";

import LogoutSVG from "../Icons/LogoutSVG";
import BackSVG from "../Icons/BackSVG";

import DateNow from "../CompUI/DateNow";
import Clock from "../CompUI/Clock";

import { Paths } from "../../routers";

import {
  logout,
  selectCurrent,
  selectIsAuthenticated,
} from "../../app/features/userSlice";
import ProfUser from "./ProfUser";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  let isAuthenticated = useSelector(selectIsAuthenticated);
  const current = useSelector(selectCurrent);

  const isLogin = location.pathname !== Paths.LOGIN_ROUTE;
  const isMain = location.pathname !== Paths.MAIN_ROUTE;

  let lastName = "";
  let firstName = "";
  let surName = "";
  let avatarUrl = "";

  if (isAuthenticated && current)
    ({ lastName, firstName, surName, avatarUrl } = current);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    navigate(Paths.LOGIN_ROUTE);
  };

  return (
    <HeaderStyled>
      {!isAuthenticated ? (
        <HeaderNav>
          <LogoutSVG />
          <LogoLink to={Paths.LOGIN_ROUTE}>TeleKIT</LogoLink>
          <BackSVG />
        </HeaderNav>
      ) : (
        <HeaderNav>
          {isLogin ? (
            <LogoutSVG active="true" onClick={handleLogout} />
          ) : (
            <LogoutSVG />
          )}
          <LogoLink to={Paths.MAIN_ROUTE} replace>
            TeleKIT
          </LogoLink>
          {isMain && isLogin ? (
            <BackSVG active="true" onClick={() => navigate(-1)} />
          ) : (
            <BackSVG />
          )}
        </HeaderNav>
      )}
      <HeadBar>
        <AuthUser>
          {isAuthenticated && isLogin ? (
            <ProfUser
              firstName={firstName}
              lastName={lastName}
              surName={surName}
              avatarURL={avatarUrl}
            />
          ) : (
            ""
          )}
        </AuthUser>
        <DateNow />
        <Clock />
      </HeadBar>
    </HeaderStyled>
  );
};
export default Header;

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
