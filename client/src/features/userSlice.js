import { createSlice } from "@reduxjs/toolkit";
import { userApi } from "../app/services/userApi";

const initialState = {
  users_list: [],
  user: null,
  current: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    logout: () => initialState,
    resetUser: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(userApi.endpoints.login.matchFulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addMatcher(userApi.endpoints.current.matchFulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.current = action.payload;
      })
      .addMatcher(
        userApi.endpoints.getOneUser.matchFulfilled,
        (state, action) => {
          state.isAuthenticated = true;
          state.current = action.payload;
        },
      );
  },
});

export const { logout, resetUser } = userSlice.actions;

export default userSlice.reducer;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectCurrent = (state) => state.user.current;
export const selectUser = (state) => state.user.user;
