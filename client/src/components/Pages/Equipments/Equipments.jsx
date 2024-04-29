import React from "react";
import { Outlet } from "react-router-dom";
import { Paths } from "../../../routers";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import Content from "../../Layouts/Content";
import SideMenu from "../../Layouts/SideMenu";

import CameraSVG from "../../Icons/CameraSVG";

const Equipments = () => {
  return (
    <Page>
      <SideBar>
        <SideMenu
          items={[
            {
              icon: <CameraSVG />,
              name: "Список оборудования",
              link: Paths.EQUIPMENT_LIST_ROUTE,
            },
            {
              icon: <CameraSVG />,
              name: "Добавить новое оборудование",
              link: Paths.EQUIPMENT_NEW_ROUTE,
            },
          ]}
        />
      </SideBar>
      <Content title="Оборудование.">
        <Outlet />
      </Content>
    </Page>
  );
};

export default Equipments;
