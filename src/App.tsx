import React, { useEffect } from 'react';

import './index.css';
import { Backdrop, CircularProgress } from '@mui/material';

import { ErrorSnackbar, Header, RoutesApp } from 'components';
import { REQUEST_STATUS } from 'enums';
import { useAppDispatch, useAppSelector } from 'hooks';
import { setIsAppInitialized, setIsUserAuth } from 'store/slices';
import { ReturnComponentType } from 'types';

const App = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const status = useAppSelector(state => state.app.status);
    const isAppInitialized = useAppSelector(state => state.app.isInitialized);

    useEffect(() => {
        const token = window.localStorage.getItem('token');

        if (token) {
            dispatch(setIsUserAuth(true));
            dispatch(setIsAppInitialized(true));

            return;
        }

        dispatch(setIsUserAuth(false));
        dispatch(setIsAppInitialized(true));
    }, []);

    if (!isAppInitialized) {
        return (
            <div
                style={{
                    position: 'fixed',
                    top: '47%',
                    textAlign: 'center',
                    width: '100%',
                }}
            >
                <CircularProgress />
            </div>
        );
    }

    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
                open={status === REQUEST_STATUS.LOADING}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            <Header />
            <RoutesApp />
            <ErrorSnackbar />
        </>
    );
};

export default App;
