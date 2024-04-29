import React from "react";
import { Outlet } from "react-router-dom";
import { Paths } from "../../../routers";

import Page from "../../Layouts/Page";
import SideBar from "../../Layouts/SideBar";
import SideMenu from "../../Layouts/SideMenu";
import Content from "../../Layouts/Content";

import KitSVG from "../../Icons/KitSVG";
import EmployeeSVG from "../../Icons/EmployeeSVG";

const Recipients = () => {
  return (
    <Page>
      <SideBar>
        <SideMenu
          items={[
            {
              icon: <KitSVG />,
              name: "Список получателей",
              link: Paths.RECIPIENT_LIST_ROUTE,
            },
            {
              icon: <EmployeeSVG />,
              name: "Добавить нового получателя",
              link: Paths.RECIPIENT_NEW_ROUTE,
            },
          ]}
        />
      </SideBar>
      <Content title="Получатели оборудования.">
        <Outlet />
      </Content>
    </Page>
  );
};

export default Recipients;
