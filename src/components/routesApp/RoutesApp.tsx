import React from 'react';

import { Container, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Login, Main, NewsList, Profile } from 'pages';
import { ReturnComponentType } from 'types';

export const RoutesApp = (): ReturnComponentType => {
    return (
        <Container fixed>
            <Grid container justifyContent="center">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/news" element={<NewsList />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Grid>
        </Container>
    );
};
