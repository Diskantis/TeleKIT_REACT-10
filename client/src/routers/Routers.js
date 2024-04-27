export const BASE_URL =
  process.env.NODE_ENV === "production" ? "none" : "http://localhost:5000";

export const Paths = {
  LOGIN_ROUTE: "/login",
  MAIN_ROUTE: "",
  SCHEDULE_ROUTE: "schedule",

  KITS_ROUTE: "kits",

  ADMIN_ROUTE: "admin",
  ADMIN_USER_NEW_ROUTE: "user_new",
  ADMIN_USER_LIST_ROUTE: "user_list",

  EQUIPMENTS_ROUTE: "equipment",
  EQUIPMENT_NEW_ROUTE: "equipment_new",
  EQUIPMENT_LIST_ROUTE: "equipment_list",

  RECIPIENT_ROUTE: "recipient",
  RECIPIENT_NEW_ROUTE: "recipient_new",
  RECIPIENT_LIST_ROUTE: "recipient_list",
};
