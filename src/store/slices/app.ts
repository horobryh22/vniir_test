import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import { REQUEST_STATUS } from 'enums';
import { AppStateType } from 'store/types';
import { Nullable } from 'types';

const initialState: AppStateType = {
    status: REQUEST_STATUS.IDLE,
    error: null,
    isInitialized: false,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatus: (state, action: PayloadAction<REQUEST_STATUS>) => {
            state.status = action.payload;
        },
        setAppError: (state, action: PayloadAction<Nullable<string>>) => {
            state.error = action.payload;
        },
        setIsAppInitialized: (state, action: PayloadAction<boolean>) => {
            state.isInitialized = action.payload;
        },
    },
});

export default appSlice.reducer;
export const { setAppError, setIsAppInitialized, setAppStatus } = appSlice.actions;
