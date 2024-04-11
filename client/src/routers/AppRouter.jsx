import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes, LOGIN_ROUTE, MAIN_ROUTE } from "./Routes";
import Login from "../components/Pages/Login";
import Main from "../components/Pages/Main";

const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.users);
  console.log(isAuthenticated);
  return (
    <Routes>
      {isAuthenticated &&
        authRoutes.map(({ Path, Element }) => (
          <Route key={Path} path={Path} element={Element} />
        ))}
      {publicRoutes.map(({ Path, Element }) => (
        <Route key={Path} path={Path} element={Element} />
      ))}
      {/*<Route key={LOGIN_ROUTE} path="/login" element={<Login />} />*/}
      {/*<Route path={MAIN_ROUTE} element={<Main />} />*/}

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
