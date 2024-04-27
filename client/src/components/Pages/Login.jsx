import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { styled } from "styled-components";
import { mixinFontParams } from "../../styles/style_constants";

import InputAuth from "../CompUI/InputAuth";

import Page from "../Layouts/Page";
import SideBar from "../Layouts/SideBar";
import Content from "../Layouts/Content";

import {
  useLazyCurrentQuery,
  useLoginMutation,
} from "../../app/services/userApi";
import ButtonSubmit from "../CompUI/ButtonSubmit";

const Login = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [triggerCurrentQuery] = useLazyCurrentQuery();

  const [selInput, setSelInput] = useState("");

  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    try {
      await login(data).unwrap();
      await triggerCurrentQuery();
      navigate("/");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Page>
      <SideBar>
        <SideTitle>ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ</SideTitle>
        <SideAuthor>by Zajkov Mikhail</SideAuthor>
      </SideBar>
      <Content title="Авторизация">
        <InputsForm onSubmit={handleSubmit(onSubmit)}>
          <InputAuth
            control={control}
            name="email"
            label="Email"
            type="text"
            selInput={selInput}
            onFocus={() => setSelInput("email")}
            required="Обязательное поле"
          />
          <InputAuth
            control={control}
            name="password"
            label="Пароль"
            type="password"
            selInput={selInput}
            onFocus={() => setSelInput("password")}
            required="Обязательное поле"
          />
          {/*<ErrorMessages error={error} />*/}
          <div>
            <ButtonSubmit type="submit" isLoading={isLoading}>
              Войти
            </ButtonSubmit>
          </div>
        </InputsForm>
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

const InputsForm = styled.form`
  width: 50%;
  margin-top: 50px;
`;
