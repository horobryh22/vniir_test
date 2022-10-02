import { configureStore } from '@reduxjs/toolkit';

import { appReducer, authReducer, newsReducer } from 'store/slices';

export const store = configureStore({
    reducer: {
        app: appReducer,
        auth: authReducer,
        news: newsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
