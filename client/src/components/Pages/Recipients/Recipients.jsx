import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";

const Recipients = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Получатели оборудования.">
        <Outlet />
      </Content>
    </Page>
  );
};

export default Recipients;
