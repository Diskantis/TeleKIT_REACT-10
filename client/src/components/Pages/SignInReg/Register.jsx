import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { Color } from "../../../styles/style_constants";

import Content from "../../Layouts/Content";
import ButtonSubMUI from "../../CompUI/Buttons/ButtonMUI";

import { Box, Link, Grid, Avatar, Typography } from "@mui/material";

import { Alert, FormControl, Stack } from "@mui/material";
import { FilledInputStl, InputLabelStl } from "./Login";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { Paths } from "../../../routers";

const Register = () => {
  const navigate = useNavigate();

  // Email Validation
  // const isEmail =
  // (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  //Inputs
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("GUEST");

  // Inputs Errors
  // const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState("");

  // Validation for onBlur Email
  const handleEmail = () => {
    // console.log(isEmail(emailInput));
    // if (!isEmail(emailInput)) {
    //   setEmailError(true);
    //   return;
    // }
    setEmailError(false);
  };

  // Validation for onBlur Password
  const handlePassword = () => {
    if (!password || password.length < 5 || password.length > 20) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    // Если ошибка в Email
    if (emailError || !email) {
      setEmailError(true);
      setFormValid('Вы не ввели email. Введите "Email"');
      return;
    }

    // Если ошибка в Password
    if (passwordError || !password) {
      setPasswordError(true);
      setFormValid(
        'Пароль должен быть в диапазоне от 5 до 20 символов. Введите "Пароль"',
      );
      return;
    }
    setFormValid(null);

    // const email = data.get("email");
    // const password = data.get("password");
    console.log({
      lastName: data.get("lastName"),
      firstName: data.get("firstName"),
      surName: data.get("surName"),
      email: data.get("email"),
      password: data.get("password"),
      role: data.get("role"),
    });
    try {
      // navigate(Paths.MAIN_ROUTE);
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
      setFormValid(err.data.message);
    }
  };

  return (
    <Content title="Регистрация">
      <CssBaseline />
      <Box
        sx={{
          my: 4,
          width: "590px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: Color.sidebar_sel_hover }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color={Color.body_text}>
          Регистрация
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            // margin="dense"
            // required
          >
            <InputLabelStl htmlFor="lastName">Фамилия</InputLabelStl>
            <FilledInputStl
              name="lastName"
              id="lastName"
              type="text"
              fullWidth
              autoComplete="lastName"
              autoFocus
              // error={lastNameError}
              border={Color.input_auth_border}
              // onBlur={handleEmail}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
          >
            <InputLabelStl htmlFor="firstName">Имя</InputLabelStl>
            <FilledInputStl
              name="firstName"
              id="firstName"
              type="text"
              fullWidth
              border={Color.input_auth_border}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
          >
            <InputLabelStl htmlFor="surName">Отчество</InputLabelStl>
            <FilledInputStl
              name="surName"
              id="surName"
              type="text"
              fullWidth
              border={Color.input_auth_border}
              onChange={(event) => {
                setSurName(event.target.value);
              }}
              value={surName}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            required
          >
            <InputLabelStl error={emailError} htmlFor="email">
              Email
            </InputLabelStl>
            <FilledInputStl
              name="email"
              id="email"
              type="text"
              fullWidth
              autoComplete="email"
              error={emailError}
              border={emailError ? "transparent" : Color.input_auth_border}
              onBlur={handleEmail}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            required
          >
            <InputLabelStl error={passwordError} htmlFor="password">
              Пароль
            </InputLabelStl>
            <FilledInputStl
              name="password"
              id="password"
              type="text"
              fullWidth
              autoComplete="current-password"
              error={passwordError}
              border={passwordError ? "transparent" : Color.input_auth_border}
              onBlur={handlePassword}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              value={password}
            />
          </FormControl>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            size="small"
            // disabled
          >
            <InputLabelStl htmlFor="role">
              Роль (нельзя изменить на этапе регистрации)
            </InputLabelStl>
            <FilledInputStl
              name="role"
              id="role"
              type="text"
              fullWidth
              border={Color.input_auth_border}
              // onChange={(event) => {
              //   setRole(event.target.value);
              // }}
              value={role}
            />
          </FormControl>
          <ButtonSubMUI
            type="submit"
            name="Зарегистрировать"
            variant="contained"
            fullWidth
            // startIcon={<LoginIcon />}
            sx={{ mt: 3, mb: 2 }}
          />
          {/* Show Form Error if any */}
          {formValid && (
            <Stack sx={{ width: "100%", pt: 1 }} spacing={2}>
              <Alert
                severity="error"
                size="small"
                sx={{ color: "white", bgcolor: Color.input_auth_bg }}
              >
                {formValid}
              </Alert>
            </Stack>
          )}

          {/*/!* Show Success if no issues *!/*/}
          {/*{success && (*/}
          {/*  <Stack sx={{ width: "100%", pt: 1 }} spacing={2}>*/}
          {/*    <Alert*/}
          {/*      severity="success"*/}
          {/*      size="small"*/}
          {/*      sx={{ color: Color.body_text }}*/}
          {/*    >*/}
          {/*      {success}*/}
          {/*    </Alert>*/}
          {/*  </Stack>*/}
          {/*)}*/}
          <Grid container sx={{ justifyContent: "center", pt: 1 }}>
            <Grid item>
              <Link href={Paths.LOGIN_ROUTE} variant="body2">
                {"Есть учетная записи? Войдите"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Content>
  );
};

export default Register;

// const InputLabelStl = styled(InputLabel)({
//   color: Color.label_auth ?? Color.label_auth_err,
//   "&.Mui-focused": {
//     color: Color.label_auth ?? Color.label_auth_err,
//   },
//   "&.Mui-error": {
//     color: Color.label_auth_err,
//   },
// });
//
// const FilledInputStl = styled(FilledInput)(({ border }) => ({
//   backgroundColor: Color.input_auth_bg,
//   color: Color.body_text,
//   "&.MuiFilledInput-root": {
//     borderBottom: "1px solid",
//     borderColor: border,
//     "&:hover": {
//       backgroundColor: Color.input_auth_bg,
//       borderColor: border,
//     },
//     "&.Mui-focused": {
//       backgroundColor: Color.input_auth_bg,
//     },
//   },
//   "&.MuiFilledInput-root:after": {
//     color: Color.body_text,
//     borderColor: border,
//   },
// }));
