import React from "react";

import { Paths } from "../../routers/Routers";

import Page from "../Layouts/Page";
import SideBar from "../Layouts/SideBar";
import SideMenu from "../Layouts/SideMenu";
import Content from "../Layouts/Content";

import CalendarSVG from "../Icons/CalendarSVG";
import KitSVG from "../Icons/KitSVG";
import CameraSVG from "../Icons/CameraSVG";
import PeopleSVG from "../Icons/PeopleSVG";
import AdminSVG from "../Icons/AdminSVG";

const Main = () => {
  return (
    <Page>
      <SideBar>
        <SideMenu
          items={[
            {
              icon: <CalendarSVG />,
              name: "Расписание",
              link: Paths.SCHEDULE_ROUTE,
            },
            {
              icon: <KitSVG />,
              name: "Комплекты",
              link: Paths.KITS_ROUTE,
            },
            {
              icon: <CameraSVG />,
              name: "Оборудование",
              link: Paths.EQUIPMENTS_ROUTE,
            },
            {
              icon: <PeopleSVG />,
              name: "Получатели",
              link: Paths.RECIPIENT_ROUTE,
            },
            {
              icon: <AdminSVG />,
              name: "Админ панель",
              link: Paths.ADMIN_ROUTE,
            },
          ]}
        />
      </SideBar>
      <Content title="Главная страница"></Content>
    </Page>
  );
};

export default Main;
