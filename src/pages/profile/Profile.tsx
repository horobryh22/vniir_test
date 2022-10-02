import React from 'react';

import { Navigate } from 'react-router-dom';

import classes from './Profile.module.css';

import camera from 'assets/img/camera.svg';
import logoutImage from 'assets/img/logout.svg';
import { EditableSpan, InputTypeFile, UserAvatar } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { logout } from 'store/slices';
import { ReturnComponentType } from 'types';

export const Profile = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const isUserAuth = useAppSelector(selectIsUserAuth);

    const userLogout = (): void => {
        dispatch(logout());
        window.localStorage.removeItem('token');
    };

    if (!isUserAuth) return <Navigate to={'/login'} />;

    return (
        <>
            <div className={classes.wrapper}>
                <span className={classes.title}>Personal Information</span>
                <div className={classes.avatar}>
                    <UserAvatar height={100} width={100} />
                    <InputTypeFile id="profile">
                        <div className={classes.avatarIcon}>
                            <img src={camera} alt="camera" />
                        </div>
                    </InputTypeFile>
                </div>
                <EditableSpan />
                <span className={classes.email}>testuser@mail.com</span>
                <button type="button" className={classes.button} onClick={userLogout}>
                    <img src={logoutImage} alt="logout" />
                    <span className={classes.buttonName}>Log out</span>
                </button>
            </div>
        </>
    );
};
