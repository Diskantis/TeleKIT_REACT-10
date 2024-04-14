import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../routers/Routes";

export const createUsers = createAsyncThunk(
  "users/createUsers",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users/register`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const loginUsers = createAsyncThunk(
  "users/loginUsers",
  async (payload, thunkAPI) => {
    try {
      const login = await axios.post(`${BASE_URL}/users/login`, payload);
      console.log(login.data);
      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/users`);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list_users: [],
    currentUser: null,
    isAuthenticated: false,
  },
  reducers: {
    authenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUsers.fulfilled, (state, action) => {
      state.currentUser = action.payload;
      state.isAuthenticated = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.list_users = action.payload;
      // state.isAuthenticated = true;
    });
  },
});

export const { authenticated } = usersSlice.actions;

export default usersSlice.reducer;
