import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Paths } from "../routers";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import PageContainer from "../components/Layouts/PageContainer";

import { selectIsAuthenticated } from "./features/userSlice";

// const themeUI = createTheme({
//   palette: {
//     mode: "dark",
//     // mode: "light",
//   },
// });

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      if (location.pathname === "/") {
        navigate(Paths.LOGIN_ROUTE);
      } else if (location.pathname === "/register") {
        navigate(Paths.REGISTER_ROUTE);
      }
    }
  }, [isAuthenticated, navigate]);

  return (
    // <ThemeProvider theme={themeUI}></ThemeProvider>
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer>© 2024</Footer>
    </>
  );
}

export default App;
