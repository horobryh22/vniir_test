import React, { useEffect } from 'react';

import classes from './News.module.css';

import { News } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { selectNews } from 'store/selectors';
import { fetchNews } from 'store/thunks';
import { ReturnComponentType } from 'types';

export const NewsList = (): ReturnComponentType => {
    const dispatch = useAppDispatch();

    const news = useAppSelector(selectNews);

    useEffect(() => {
        dispatch(fetchNews());
    }, [dispatch]);

    const mappedNews = news.map(news => {
        return (
            <News
                key={news.id}
                title={news.title}
                description={news.description}
                createdAt={news.createdAt}
            />
        );
    });

    if (!mappedNews.length) return null;

    return (
        <div className={classes.wrapper}>
            <h1 className={classes.title}>News</h1>
            <div>{mappedNews}</div>
        </div>
    );
};
