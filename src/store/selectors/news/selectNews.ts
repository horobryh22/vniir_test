import { NewsType } from 'api';
import { RootState } from 'store/store';

export const selectNews = (state: RootState): NewsType[] => {
    return state.news.news;
};
