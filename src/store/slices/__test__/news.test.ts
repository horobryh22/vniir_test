import { NewsType } from 'api';
import { newsReducer } from 'store/slices/index';
import { fetchNews } from 'store/thunks';
import { NewsStateType } from 'store/types';

let startState: NewsStateType;
let payload: NewsType[];

beforeEach(() => {
    payload = [
        { createdAt: '2022-01-01', id: 1, description: 'descr', title: 'title1' },
        { createdAt: '2022-02-02', id: 2, description: 'description', title: 'title2' },
    ];

    startState = {
        news: [],
    };
});

test('if news were gotten, property news should contain array with objects type NewsType', () => {
    const endState = newsReducer(startState, fetchNews.fulfilled(payload, ''));

    expect(endState.news).toEqual(payload);
});
