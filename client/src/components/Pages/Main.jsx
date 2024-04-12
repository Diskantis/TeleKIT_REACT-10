import React from "react";

import {
  Content,
  ContentContainer,
  ContentTitle,
  FormContainer,
  FormContent,
  FormTitle,
  Page,
} from "../../styles/style";

import CalendarSVG from "../Icons/CalendarSVG";
import KitSVG from "../Icons/KitSVG";
import CameraSVG from "../Icons/CameraSVG";
import PeopleSVG from "../Icons/PeopleSVG";
import AdminSVG from "../Icons/AdminSVG";

import SideBar from "../Layouts/SideBar";
import TableUsers from "../Layouts/TableUsers";
import SideMenu from "../Layouts/SideMenu";

import { MAIN_ROUTE } from "../../routers/Routes";

const Main = () => {
  return (
    <Page>
      <SideBar>
        <SideMenu
          items={[
            {
              icon: <CalendarSVG />,
              name: "Расписание",
              // link: SCHEDULE_ROUTE,
              link: MAIN_ROUTE,
            },
            {
              icon: <KitSVG />,
              name: "Комплекты",
              // link: KITS_ROUTE,
              link: MAIN_ROUTE,
            },
            {
              icon: <CameraSVG />,
              name: "Оборудование",
              // link: EQUIPMENTS_ROUTE,
              link: MAIN_ROUTE,
            },
            {
              icon: <PeopleSVG />,
              name: "Получатели",
              // link: RECIPIENT_LIST_ROUTE,
              link: MAIN_ROUTE,
            },
            {
              icon: <AdminSVG />,
              name: "Админ панель",
              // link: ADMIN_ROUTE,
              link: MAIN_ROUTE,
            },
          ]}
        />
      </SideBar>
      <Content>
        <ContentTitle>Главная страница</ContentTitle>
        <ContentContainer>
          <FormContainer>
            <FormTitle>Список пользователей</FormTitle>
            <FormContent>
              {/*{status === "loading" && <Spin fullscreen />}*/}
              {/*{error && <h2>An error occurred: {error}</h2>}*/}
              <TableUsers />
            </FormContent>
          </FormContainer>
        </ContentContainer>
      </Content>
    </Page>
  );
};

export default Main;
