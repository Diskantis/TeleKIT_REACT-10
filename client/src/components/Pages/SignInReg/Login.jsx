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
  useLoginMutation,
} from "../../../app/services/userApi";

const Login = () => {
  const [login] = useLoginMutation();
  const [triggerCurrentQuery] = useLazyCurrentQuery();
  const navigate = useNavigate();

  // Email Validation
  // const isEmail =
  // (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

  const [showPassword, setShowPassword] = React.useState(false);

  //Inputs
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

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

    const email = data.get("email");
    const password = data.get("password");
    try {
      await login({ email, password }).unwrap();
      await triggerCurrentQuery().unwrap();
      navigate(Paths.MAIN_ROUTE);
    } catch (err) {
      setEmailError(true);
      setPasswordError(true);
      setFormValid(err.data.message);
    }
  };

  return (
    <Content title="Авторизация">
      <CssBaseline />
      <Box
        sx={{
          my: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: Color.sidebar_sel_hover }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color={Color.body_text}>
          Авторизация
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <FormControl
            sx={{ mt: 2, width: "100%" }}
            variant="filled"
            margin="normal"
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
          <FormControl sx={{ mt: 2, width: "100%" }} variant="filled" required>
            <InputLabelStl error={passwordError} htmlFor="password">
              Пароль
            </InputLabelStl>
            <FilledInputStl
              name="password"
              id="password"
              type={showPassword ? "text" : "password"}
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
              }
            />
          </FormControl>
          <ButtonSubMUI
            type="submit"
            name="Войти"
            variant="contained"
            fullWidth
            startIcon={<LoginIcon />}
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
          <Grid container sx={{ justifyContent: "center", pt: 1 }}>
            <Grid item>
              <Link href={Paths.REGISTER_ROUTE} variant="body2">
                {"Нет учетной записи? Зарегистрируйтесь"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Content>
  );
};

export default Login;

const InputLabelStl = styled(InputLabel)({
  color: Color.label_auth ?? Color.label_auth_err,
  "&.Mui-focused": {
    color: Color.label_auth ?? Color.label_auth_err,
  },
  "&.Mui-error": {
    color: Color.label_auth_err,
  },
});

const FilledInputStl = styled(FilledInput)(({ border }) => ({
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
