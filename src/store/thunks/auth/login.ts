import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { authAPI, LoginResponse } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppError, setAppStatus } from 'store/slices';
import { FormValues, Nullable } from 'types';

export const login = createAsyncThunk<LoginResponse, FormValues, { rejectValue: string }>(
    'auth/login',
    async (userData, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setAppStatus(REQUEST_STATUS.LOADING));
            const { data } = await authAPI.login(userData);

            return data;
        } catch (e) {
            const err = e as AxiosError;

            dispatch(setAppError(err.response?.data as Nullable<string>));

            return rejectWithValue(err.message);
        } finally {
            dispatch(setAppStatus(REQUEST_STATUS.IDLE));
        }
    },
);
