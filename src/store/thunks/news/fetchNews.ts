import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import { News, newsAPI } from 'api';
import { REQUEST_STATUS } from 'enums';
import { setAppError, setAppStatus } from 'store/slices';
import { Nullable } from 'types';

export const fetchNews = createAsyncThunk<News[], void, { rejectValue: string }>(
    'news/fetchNews',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            dispatch(setAppStatus(REQUEST_STATUS.LOADING));
            const { data } = await newsAPI.fetchNews();

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
