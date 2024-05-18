import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Paths } from "../routers";

import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import PageContainer from "../components/Layouts/PageContainer";

import { selectAllUsers, selectIsAuthenticated } from "./features/userSlice";

const themeUI = createTheme({
  palette: {
    mode: "dark",
    // mode: "light",
  },
});

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate(Paths.LOGIN_ROUTE);
    }
  }, [isAuthenticated, navigate]);

  return (
    <ThemeProvider theme={themeUI}>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
