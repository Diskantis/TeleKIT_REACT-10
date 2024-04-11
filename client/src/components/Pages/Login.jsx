import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { observer } from "mobx-react-lite";
// import { Context } from "../../index";

// import { login } from "../../http/userAPI";
import { MAIN_ROUTE } from "../../routers/Routes";

import { styled } from "styled-components";
import {
  ContentContainer,
  Content,
  ContentTitle,
  Page,
} from "../../styles/style";
import { mixinFontParams } from "../../styles/style_constants";
import SideBar from "../Layouts/SideBar";
import InputAuth from "../CompUI/InputAuth";
import { BtnSubmit } from "../CompUI/Button";
import { useDispatch } from "react-redux";
import { authenticated } from "../../features/Users/usersSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const click = async () => {
    try {
      // await login(email, password);

      dispatch(authenticated(true));
      navigate(MAIN_ROUTE);
    } catch (e) {
      alert(e.response.data.message);
    }
  };

  const visible = () => {
    if (email === "") setSelInput("");
    if (password === "") setSelInput("");
  };

  return (
    <Page>
      <SideBar>
        <SideTitle>ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ</SideTitle>
        <SideAuthor>by Zajkov Mikhail</SideAuthor>
      </SideBar>
      <Content onClick={() => visible()}>
        <ContentTitle>Авторизация</ContentTitle>
        <ContentContainer>
          <InputsContainer onClick={(e) => e.stopPropagation()}>
            <InputAuth
              type="text"
              name="email"
              selInput={selInput}
              value={email}
              onFocus={() => setSelInput("email")}
              onChange={(e) => setEmail(e.target.value)}
            >
              Email
            </InputAuth>
            <InputAuth
              type="password"
              name="password"
              selInput={selInput}
              value={password}
              onFocus={() => setSelInput("password")}
              onChange={(e) => setPassword(e.target.value)}
            >
              Пароль
            </InputAuth>
          </InputsContainer>
          <BtnSubmit onClick={click}>Войти</BtnSubmit>
        </ContentContainer>
      </Content>
    </Page>
  );
};

const SideTitle = styled.p`
  padding-right: 75px;
  padding-left: 15px;
  margin-bottom: 20px;
`;

const SideAuthor = styled.small`
  ${mixinFontParams({ size: "1rem" })}
  padding-left: 15px;
`;

const InputsContainer = styled.div`
  width: 50%;
  margin-top: 50px;
`;

export default Login;
