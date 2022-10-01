import { createSlice } from '@reduxjs/toolkit';

import { login } from 'store/thunks';
import { AuthStateType } from 'store/types';

const initialState: AuthStateType = {
    isUserAuth: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            state.isUserAuth = false;
        },
    },
    extraReducers: builder => {
        builder.addCase(login.fulfilled, state => {
            state.isUserAuth = true;
        });
        builder.addCase(login.pending, state => {
            state.isUserAuth = false;
        });
        builder.addCase(login.rejected, state => {
            state.isUserAuth = false;
        });
    },
});

export default authSlice.reducer;
export const { logout } = authSlice.actions;
