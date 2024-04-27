import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./app/store";

import { GlobalStyle } from "./styles/style";

import App from "./components/App/App";
import { Paths } from "./routers/Routers";

// import Auth from "./components/Pages/Auth";
import Login from "./components/Pages/Login";

import Main from "./components/Pages/Main";
import Schedule from "./components/Pages/Schedule";

import Kits from "./components/Pages/Kits/Kits";

import Admin from "./components/Pages/Admin/Admin";
import AdminUserList from "./components/Pages/Admin/Admin_UserList";
import AdminUserNew from "./components/Pages/Admin/Admin_UserNew";

import Equipment from "./components/Pages/Equipments/Equipment";
import EquipmentNew from "./components/Pages/Equipments/EquipmentNew";
import EquipmentList from "./components/Pages/Equipments/EquipmentList";

import Recipient from "./components/Pages/Recipients/Recipient";
import RecipientNew from "./components/Pages/Recipients/RecipientNew";
import RecipientList from "./components/Pages/Recipients/RecipientList";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
    children: [{ path: Paths.LOGIN_ROUTE, element: <Login /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: Paths.MAIN_ROUTE, element: <Main /> },
      { path: Paths.SCHEDULE_ROUTE, element: <Schedule /> },
      { path: Paths.KITS_ROUTE, element: <Kits /> },
      {
        path: Paths.ADMIN_ROUTE,
        element: <Admin />,
        children: [
          { path: Paths.ADMIN_USER_LIST_ROUTE, element: <AdminUserList /> },
          { path: Paths.ADMIN_USER_NEW_ROUTE, element: <AdminUserNew /> },
        ],
      },
      {
        path: Paths.EQUIPMENTS_ROUTE,
        element: <Equipment />,
        children: [
          { path: Paths.EQUIPMENT_NEW_ROUTE, element: <EquipmentNew /> },
          { path: Paths.EQUIPMENT_LIST_ROUTE, element: <EquipmentList /> },
        ],
      },
      {
        path: Paths.RECIPIENT_ROUTE,
        element: <Recipient />,
        children: [
          { path: Paths.RECIPIENT_NEW_ROUTE, element: <RecipientNew /> },
          { path: Paths.RECIPIENT_LIST_ROUTE, element: <RecipientList /> },
        ],
      },
    ],
  },
]);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
