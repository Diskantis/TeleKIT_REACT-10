import Login from "../components/Pages/Login";
import Main from "../components/Pages/Main";
import Schedule from "../components/Pages/Schedule";
import Kits from "../components/Pages/Kits/Kits";
import KitPage from "../components/Pages/Kits/KitPage";
import Admin from "../components/Pages/Admin/Admin";
import Admin_UserList from "../components/Pages/Admin/Admin_UserList";
import Admin_UserNew from "../components/Pages/Admin/Admin_UserNew";
import Equipments from "../components/Pages/Equipments/Equipments";
import EquipmentNew from "../components/Pages/Equipments/EquipmentNew";
import EquipmentList from "../components/Pages/Equipments/EquipmentList";
import RecipientList from "../components/Pages/Recipients/RecipientList";
import RecipientNew from "../components/Pages/Recipients/RecipientNew";

export const BASE_URL = "http://localhost:5000/api";

export const MAIN_ROUTE = "/";
export const LOGIN_ROUTE = "/login";
export const SCHEDULE_ROUTE = "/schedule";

export const KITS_ROUTE = "/kits";

export const ADMIN_ROUTE = "/admin";
export const ADMIN_USER_LIST_ROUTE = "/admin/user_list";
export const ADMIN_USER_NEW_ROUTE = "/admin/user_new";

export const EQUIPMENTS_ROUTE = "/equipments";
export const EQUIPMENT_NEW_ROUTE = "/equipment/equipment_new";
export const EQUIPMENT_LIST_ROUTE = "/equipment/equipment_list";

export const RECIPIENT_LIST_ROUTE = "/recipient/recipient_list";
export const RECIPIENT_NEW_ROUTE = "/recipient/recipient_new";

export const authRoutes = [
  { Path: MAIN_ROUTE, Element: <Main /> },
  { path: SCHEDULE_ROUTE, Component: Schedule },

  { path: KITS_ROUTE, Component: Kits },
  { path: KITS_ROUTE + "/:id", Component: KitPage },

  { path: ADMIN_ROUTE, Component: Admin },
  { path: ADMIN_USER_LIST_ROUTE, Component: Admin_UserList },
  { path: ADMIN_USER_NEW_ROUTE, Component: Admin_UserNew },

  { path: EQUIPMENTS_ROUTE, Component: Equipments },
  { path: EQUIPMENT_NEW_ROUTE, Component: EquipmentNew },
  { path: EQUIPMENT_LIST_ROUTE, Component: EquipmentList },

  { path: RECIPIENT_LIST_ROUTE, Component: RecipientList },
  { path: RECIPIENT_NEW_ROUTE, Component: RecipientNew },
];

export const publicRoutes = { Path: LOGIN_ROUTE, Element: <Login /> };
