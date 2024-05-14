import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/material/styles";
import { Color } from "../../../styles/style_constants";

import Content from "../../Layouts/Content";
import ButtonSubMUI from "../../CompUI/Buttons/ButtonMUI";

import { Box, Link, Grid, Avatar, Typography } from "@mui/material";

import {
  Alert,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Stack,
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";

import { Paths } from "../../../routers";
import {
  useLazyCurrentQuery,
  useLazyGetAllUsersQuery,
  useLoginMutation,
  useRegisterMutation,
} from "../../../app/services/userApi";
import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";

const SignInReg = () => {
  const [register, setRegister] = useState(false);

  const [login] = useLoginMutation();
  const [regis, { isLoading }] = useRegisterMutation();
  const [triggerCurrentQuery] = useLazyCurrentQuery();
  const navigate = useNavigate();

  // Email Validation
  // const isEmail =
  // (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surName, setSurName] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [role, setRole] = useState("GUEST");

  // Inputs Errors
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Overall Form Validity
  const [formValid, setFormValid] = useState("");
  const [success, setSuccess] = useState("");

  // Handles Display and Hide Password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
    if (
      !passwordInput ||
      passwordInput.length < 5 ||
      passwordInput.length > 20
    ) {
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSuccess(null);

    // Если ошибка в Email
    if (emailError || !emailInput) {
      setEmailError(true);
      setFormValid('Вы не ввели email. Введите "Email"');
      return;
    }

    // Если ошибка в Password
    if (passwordError || !passwordInput) {
      setPasswordError(true);
      setFormValid(
        'Пароль должен быть в диапазоне от 5 до 20 символов. Введите "Пароль"',
      );
      return;
    }
    setFormValid(null);

    const lastName = data.get("lastName");
    const firstName = data.get("firstName");
    const surName = data.get("surName");
    const email = data.get("email");
    const password = data.get("password");
    const role = data.get("role");

    try {
      if (!register) {
        await login({ email, password }).unwrap();
        await triggerCurrentQuery().unwrap();
        navigate(Paths.MAIN_ROUTE);
      } else {
        await regis({
          lastName,
          firstName,
          surName,
          email,
          password,
          role,
        }).unwrap();
        setRegister(false);
      }
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
      setFormValid(err.data.message);
    }
  };

  return (
    <Page>
      <SideBar>
        <Typography component="p" sx={{ pl: 1.5, pr: 7.5, mb: 2 }}>
          ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ
        </Typography>
        <Typography component="p" sx={{ pl: 1.5 }}>
          by Zajkov Mikhail
        </Typography>
      </SideBar>
      <Content title={register ? "Регистрация" : "Авторизация"}>
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
            {register ? "Регистрация" : "Авторизация"}
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}
          >
            {register && (
              <>
                <FormControl
                  sx={{ mt: 2, width: "100%" }}
                  variant="filled"
                  size="small"
                >
                  <InputLabelStl htmlFor="lastName">Фамилия</InputLabelStl>
                  <FilledInputStl
                    name="lastName"
                    id="lastName"
                    type="text"
                    fullWidth
                    autoComplete="lastName"
                    // autoFocus
                    border={Color.input_auth_border}
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
              </>
            )}
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
                autoFocus
                error={emailError}
                border={emailError ? "transparent" : Color.input_auth_border}
                onBlur={handleEmail}
                onChange={(event) => {
                  setEmailInput(event.target.value);
                }}
                value={emailInput}
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
                type={!register ? (showPassword ? "text" : "password") : "text"}
                fullWidth
                autoComplete="current-password"
                error={passwordError}
                border={passwordError ? "transparent" : Color.input_auth_border}
                onBlur={handlePassword}
                onChange={(event) => {
                  setPasswordInput(event.target.value);
                }}
                value={passwordInput}
                endAdornment={
                  !register && (
                    <InputAdornment position="end">
                      <IconButton
                        color={passwordError ? "error" : "primary"}
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }
              />
            </FormControl>
            {register && (
              <FormControl
                sx={{ mt: 2, width: "100%" }}
                variant="filled"
                size="small"
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
                  value={role}
                />
              </FormControl>
            )}
            <ButtonSubMUI
              type="submit"
              name={register ? "Зарегистрировать" : "Войти"}
              width="590px"
              variant="contained"
              fullWidth
              startIcon={!register && <LoginIcon />}
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

            {/* Show Success if no issues */}
            {success && (
              <Stack sx={{ width: "100%", pt: 1 }} spacing={2}>
                <Alert
                  severity="success"
                  size="small"
                  sx={{ color: Color.body_text }}
                >
                  {success}
                </Alert>
              </Stack>
            )}
          </Box>
          <Grid container sx={{ justifyContent: "center", pt: 1 }}>
            <Grid item>
              <Link component="button" onClick={() => setRegister(!register)}>
                {register
                  ? "Есть учетная записи? Войдите"
                  : "Нет учетной записи? Зарегистрируйтесь"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Content>
    </Page>
  );
};

export default SignInReg;

export const InputLabelStl = styled(InputLabel)({
  color: Color.label_auth ?? Color.label_auth_err,
  "&.Mui-focused": {
    color: Color.label_auth ?? Color.label_auth_err,
  },
  "&.Mui-error": {
    color: Color.label_auth_err,
  },
});

export const FilledInputStl = styled(FilledInput)(({ border }) => ({
  backgroundColor: Color.input_auth_bg,
  color: Color.body_text,
  "&.MuiFilledInput-root": {
    borderBottom: "1px solid",
    borderColor: border,
    "&:hover": {
      backgroundColor: Color.input_auth_bg,
      borderColor: border,
    },
    "&.Mui-focused": {
      backgroundColor: Color.input_auth_bg,
    },
  },
  "&.MuiFilledInput-root:after": {
    color: Color.body_text,
    borderColor: border,
  },
}));
