import React from 'react';

import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

import classes from './Header.module.css';

import { ReturnComponentType } from 'types';

export type Link = {
    name: string;
    link: string;
};

const LINKS: Link[] = [
    {
        name: 'Main',
        link: '/',
    },
    {
        name: 'News',
        link: '/news',
    },
    {
        name: 'Profile',
        link: '/profile',
    },
];

export const Header = (): ReturnComponentType => {
    const navigate = useNavigate();

    const links = LINKS.map(({ link, name }, index) => {
        return (
            <NavLink key={index} to={link} className={classes.link}>
                {name}
            </NavLink>
        );
    });

    const handleClick = (): void => {
        navigate('/login');
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
                    <Button color="inherit" onClick={handleClick}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};
