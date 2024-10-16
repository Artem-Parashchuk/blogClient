import { createSlice } from "@reduxjs/toolkit";
import { registerUserThunk } from "./registerThunks";
import { loginThunk } from "./loginThunk";
import { getMeThunk } from "./getMeThunk";

const initialState = {
  username: null,
  token: null,
  isLoading: false,
  status: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoading = null;
      state.status = null;
      state.token = null; 
      state.username = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register User
      .addCase(registerUserThunk.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(registerUserThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.message;
        state.username = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUserThunk.rejected, (state, action) => {
        state.status = action.payload.message;
        state.isLoading = false;
      })
      // Login User
      .addCase(loginThunk.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = action.payload.message;
        state.username = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = action.payload.message;
        state.isLoading = false;
      })
      //Check  authorization
      .addCase(getMeThunk.pending, (state) => {
        state.isLoading = true;
        state.status = null;
      })
      .addCase(getMeThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = null;
        state.username = action.payload?.user;
        state.token = action.payload?.token;
      })
      .addCase(getMeThunk.rejected, (state, action) => {
        state.status = action.payload.message;
        state.isLoading = false;
      });
  },
});
export const {logout} = authSlice.actions
export default authSlice.reducer;
