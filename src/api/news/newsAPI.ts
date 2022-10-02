import { NewsType } from 'api';
import { instance } from 'api/config';

export const newsAPI = {
    fetchNews: () => {
        return instance.get<NewsType[]>('/news');
    },
};
