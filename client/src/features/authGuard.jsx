import React from "react";
import { useCurrentQuery } from "../app/services/userApi";

import { Spin } from "antd";

const AuthGuard = ({ children }) => {
  const { isLoading } = useCurrentQuery();
  if (isLoading) {
    return <Spin fullscreen />;
  }
  return children;
};

export default AuthGuard;
