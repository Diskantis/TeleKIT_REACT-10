import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";

import { Typography } from "@mui/material";

const SignInSide = () => {
  return (
    <Page>
      <SideBar>
        <Typography component="p" sx={{ pl: 1.5, pr: 7.5, mb: 2 }}>
          ТЕЛЕВИЗИОННЫЙ ЖУРНАЛИСТСКИЙ КОМПЛЕКТ
        </Typography>
        <Typography component="p" sx={{ pl: 1.5 }}>
          by Zajkov Mikhail
        </Typography>
      </SideBar>
      <Outlet />
    </Page>
  );
};

export default SignInSide;
