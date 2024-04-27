import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import Container from "../Layouts/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer>© 2024</Footer>
    </>
  );
}

export default App;
