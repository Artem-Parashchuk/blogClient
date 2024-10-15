import { createSlice } from "@reduxjs/toolkit";
import { registerUser } from "./authThunks";

const initialState = {
    username: null,
    token: null,
    isLoading: false,
    status: null
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.status = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.status = action.payload.message;
                state.username = action.payload.user; 
                state.token = action.payload.token;   
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.status = action.error?.message || 'Registration failed';
            });
    }
});

export default authSlice.reducer;
