import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components/macro";
import { mixinFontParams } from "../../styles/style_constants";

import Page from "../Layouts/Page";
import SideBar from "../Layouts/SideBar";
import Content from "../Layouts/Content";

import InputAuth from "../CompUI/Inputs/InputAuth";
import ButtonSubMUI from "../CompUI/Buttons/ButtonMUI";

import { Paths } from "../../routers";
import {
  useLazyCurrentQuery,
  useLoginMutation,
} from "../../app/services/userApi";
import InputMui from "../CompUI/Inputs/InputMUI";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const [login] = useLoginMutation();
  const [triggerCurrentQuery] = useLazyCurrentQuery();
  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setSelInput("");
  };

  const click = async () => {
    try {
      await login({ email, password }).unwrap();
      await triggerCurrentQuery().unwrap();
      navigate(Paths.MAIN_ROUTE);
      resetForm();
    } catch (err) {
      alert(err.data.message);
      resetForm();
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
      <Content title="Авторизация" onClick={() => visible()}>
        <InputsContainer onClick={(e) => e.stopPropagation()}>
          <InputAuth
            type="email"
            name="Email"
            selInput={selInput}
            value={email}
            onFocus={() => setSelInput("email")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputAuth
            type="password"
            name="Пароль"
            selInput={selInput}
            value={password}
            onFocus={() => setSelInput("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/*<InputMui />*/}
        </InputsContainer>
        <InputMui />
        <br />
        <div>
          <ButtonSubMUI
            name="Войти"
            width="120px"
            variant="contained"
            onClick={click}
          />
        </div>
      </Content>
    </Page>
  );
};

export default Login;

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
