import { createSlice } from '@reduxjs/toolkit';

import { NewsStateType } from 'store/types';

const initialState: NewsStateType = {
    news: [],
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
});

export default newsSlice.reducer;
