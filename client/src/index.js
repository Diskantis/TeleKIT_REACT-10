import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { GlobalStyle } from "./styles/style";
import { store } from "./app/store";
import { Paths } from "./routers";
import App from "./app/App";
import AuthGuard from "./app/features/authGuard";

// Rages
import SignInReg from "./components/Pages/SignInReg/SignInReg";
// import Login from "./components/Pages/SignInReg/Login";
// import Register from "./components/Pages/SignInReg/Register";

import Main from "./components/Pages/Main";
import Schedule from "./components/Pages/Schedule";

import Kits from "./components/Pages/Kits/Kits";

import Admin from "./components/Pages/Admin/Admin";
import AdminUserList from "./components/Pages/Admin/Admin_UserList";
import AdminUserNew from "./components/Pages/Admin/Admin_UserNew";

import Equipments from "./components/Pages/Equipments/Equipments";
import EquipmentNew from "./components/Pages/Equipments/EquipmentNew";
import EquipmentList from "./components/Pages/Equipments/EquipmentList";

import Recipients from "./components/Pages/Recipients/Recipients";
import RecipientNew from "./components/Pages/Recipients/RecipientNew";
import RecipientList from "./components/Pages/Recipients/RecipientList";

const router = createBrowserRouter([
  {
    path: Paths.LOGIN_ROUTE,
    element: <App />,
    // children: [{ path: Paths.LOGIN_ROUTE, element: <Login /> }],
    children: [{ path: Paths.LOGIN_ROUTE, element: <SignInReg /> }],
    // children: [
    //   {
    //     path: "/",
    //     element: <SignInReg />,
    //     children: [
    //       { path: Paths.LOGIN_ROUTE, element: <Login /> },
    //       { path: Paths.REGISTER_ROUTE, element: <Register /> },
    //     ],
    //   },
    // ],
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
          { path: Paths.ADMIN_USER_NEW_ROUTE, element: <AdminUserNew /> },
          { path: Paths.ADMIN_USER_LIST_ROUTE, element: <AdminUserList /> },
        ],
      },
      {
        path: Paths.EQUIPMENTS_ROUTE,
        element: <Equipments />,
        children: [
          { path: Paths.EQUIPMENT_NEW_ROUTE, element: <EquipmentNew /> },
          { path: Paths.EQUIPMENT_LIST_ROUTE, element: <EquipmentList /> },
        ],
      },
      {
        path: Paths.RECIPIENT_ROUTE,
        element: <Recipients />,
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
      <AuthGuard>
        <RouterProvider router={router} />
      </AuthGuard>
    </Provider>
  </React.StrictMode>,
);

// "client": "cd ../client ; npm run start",
// "cd .. && npm start --prefix client ",
