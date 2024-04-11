import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";

import AppRouter from "../../routers/AppRouter";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";

// import { getUsers } from "../../features/Users/usersSlice";

const App = () => {
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer>© 2024</Footer>
    </BrowserRouter>
  );
};
export default App;
