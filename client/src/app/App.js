import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";
import PageContainer from "../components/Layouts/PageContainer";

import { selectIsAuthenticated } from "./features/userSlice";

function App() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return (
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
