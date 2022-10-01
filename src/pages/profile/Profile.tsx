import React from 'react';

import { Navigate } from 'react-router-dom';

import { useAppSelector } from 'hooks';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const isUserAuth = useAppSelector(state => state.auth.isUserAuth);

    if (!isUserAuth) return <Navigate to={'/login'} />;

    return <div>Profile</div>;
};
