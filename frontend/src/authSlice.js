// authSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  // other initial state properties
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      // other login-related state updates
    },
    logout: (state) => {
      state.isLoggedIn = false;
      // other logout-related state updates
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
