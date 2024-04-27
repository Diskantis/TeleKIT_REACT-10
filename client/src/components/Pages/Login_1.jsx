import React, { useState } from "react";

import { styled } from "styled-components";
import { mixinFontParams } from "../../styles/style_constants";

import Page from "../Layouts/Page";
import SideBar from "../Layouts/SideBar";
import Content from "../Layouts/Content";
// import InputAuth from "../CompUI/InputAuth";
import { BtnSubmit } from "../CompUI/Button";
import InputAuth_1 from "../CompUI/InputAuth_1";

import { useForm } from "react-hook-form";

import {
  useLazyCurrentQuery,
  useLoginMutation,
} from "../../app/services/userApi";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../CompUI/ButtonSubmit";

// import { BtnSubmit } from "../CompUI/Button";
// import InputAuth from "../CompUI/InputAuth";
// import { Paths } from "../../routers/Routers";

const Login = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [selInput, setSelInput] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [triggerCurrentQuery] = useLazyCurrentQuery();

  const onSubmit = async (data) => {
    try {
      console.log("submit");
      await login(data).unwrap();
      // await triggerCurrentQuery();
      // navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const visible = () => {
    setSelInput("");
    setSelInput("");
  };

  return (
    <Page>
      <SideBar>
        <SideTitle>ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ</SideTitle>
        <SideAuthor>by Zajkov Mikhail</SideAuthor>
      </SideBar>
      <Content title="Авторизация">
        <form
        // onClick={(e) => e.stopPropagation()}
        // onSubmit={handleSubmit(onSubmit)}
        >
          <InputAuth_1
            control={control}
            name="email"
            label="Email"
            type="email"
            selInput={selInput}
            // value={email}
            onFocus={() => setSelInput("email")}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <InputAuth_1
            control={control}
            name="password"
            label="Пароль"
            type="password"
            selInput={selInput}
            // value={password}
            onFocus={() => setSelInput("password")}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <ButtonSubmit type="submit" isLoading={isLoading}>
          Войти
        </ButtonSubmit>
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
