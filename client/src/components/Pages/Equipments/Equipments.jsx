import React from "react";
import { Outlet } from "react-router-dom";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";

const Equipments = () => {
  return (
    <Page>
      <SideBar />
      <Content title="Оборудование.">
        <Outlet />
      </Content>
    </Page>
  );
};

export default Equipments;
