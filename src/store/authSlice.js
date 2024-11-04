// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { token: null, isAuthenticated: false, user: null },
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
      state.isAuthenticated = !!action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
