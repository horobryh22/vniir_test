import React from 'react';

import { Paper } from '@mui/material';

import classes from './News.module.css';

import { NewsType } from 'api';
import { ReturnComponentType } from 'types';

export const News = ({
    description,
    createdAt,
    title,
}: Omit<NewsType, 'id'>): ReturnComponentType => {
    return (
        <Paper elevation={10} className={classes.newsWrapper}>
            <h2>{title}</h2>
            <span>{createdAt}</span>
            <p>{description}</p>
        </Paper>
    );
};
