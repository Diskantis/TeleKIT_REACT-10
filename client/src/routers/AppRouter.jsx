import React from "react";
import { useSelector } from "react-redux";

import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "./Routes";
import Login from "../components/Pages/Login";

const AppRouter = () => {
  const { isAuthenticated } = useSelector((state) => state.users);

  return (
    <Routes>
      {isAuthenticated &&
        authRoutes.map(({ Path, Element }) => (
          <Route key={Path} path={Path} element={Element} />
        ))}
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
