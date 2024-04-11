import Login from "../components/Pages/Login";
import Main from "../components/Pages/Main";

export const BASE_URL = "http://localhost:5000/api";

export const MAIN_ROUTE = "/";
export const LOGIN_ROUTE = "/login";

export const authRoutes = [{ Path: MAIN_ROUTE, Element: <Main /> }];

export const publicRoutes = [{ Path: LOGIN_ROUTE, Element: <Login /> }];
