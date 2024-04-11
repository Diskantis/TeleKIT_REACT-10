import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Users/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
