import React from "react";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import SideMenu from "../../Layouts/SideMenu";
import Content from "../../Layouts/Content";

import { Paths } from "../../../routers";

import KitSVG from "../../Icons/KitSVG";
import EmployeeSVG from "../../Icons/EmployeeSVG";
import { Outlet } from "react-router-dom";

const Admin = () => {
  return (
    <Page>
      <SideBar>
        <SideMenu
          items={[
            {
              icon: <KitSVG />,
              name: "Список пользователей",
              link: Paths.ADMIN_USER_LIST_ROUTE,
            },
            {
              icon: <EmployeeSVG />,
              name: "Создать нового пользователя",
              link: Paths.ADMIN_USER_NEW_ROUTE,
            },
          ]}
        />
      </SideBar>
      <Content title="Административная панель.">
        <Outlet />
      </Content>
    </Page>
  );
};

export default Admin;
