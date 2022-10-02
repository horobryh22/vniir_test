import React from 'react';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './Header.module.css';

import { UserAvatar } from 'components';
import { LINKS } from 'constant';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectIsUserAuth } from 'store/selectors';
import { logout } from 'store/slices';
import { ReturnComponentType } from 'types';

export const Header = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const isUserAuth = useAppSelector(selectIsUserAuth);

    const links = LINKS.map(({ link, name }, index) => {
        return (
            <NavLink key={index} to={link} className={classes.link}>
                {name}
            </NavLink>
        );
    });

    const toLogin = (): void => {
        navigate('/login');
    };

    const userLogout = (): void => {
        dispatch(logout());
        window.localStorage.removeItem('token');
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                        className={classes.links}
                    >
                        {links}
                    </Typography>
                    {isUserAuth && (
                        <div className={classes.authUser}>
                            <UserAvatar width={40} height={40} />
                            <span>Username</span>
                        </div>
                    )}
                    <Button color="inherit" onClick={isUserAuth ? userLogout : toLogin}>
                        {isUserAuth ? 'Logout' : 'Login'}
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
