import { createSlice } from '@reduxjs/toolkit';

import { fetchNews } from 'store/thunks';
import { NewsStateType } from 'store/types';

const initialState: NewsStateType = {
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchNews.fulfilled, (state, action) => {
            state.news = action.payload;
        });
        builder.addCase(fetchNews.pending, state => {
            state.news = [];
        });
        builder.addCase(fetchNews.rejected, state => {
            state.news = [];
        });
    },
});

export default newsSlice.reducer;
