import { REQUEST_STATUS } from 'enums';
import { selectError } from 'store/selectors/app/selectError';
import { selectIsInitialized } from 'store/selectors/app/selectIsInitialized';
import { selectStatus } from 'store/selectors/app/selectStatus';
import { selectIsUserAuth } from 'store/selectors/auth/selectIsUserAuth';
import { selectNews } from 'store/selectors/news/selectNews';
import { RootState } from 'store/store';

let state: RootState;

beforeEach(() => {
    state = {
        news: {
            news: [],
        },
        app: {
            error: null,
            status: REQUEST_STATUS.IDLE,
            isInitialized: false,
        },
        auth: {
            isUserAuth: true,
        },
    };
});

describe('select', () => {
    test('news', () => {
        const news = selectNews(state);

        expect(news.length).toBe(0);
    });

    test('error', () => {
        const error = selectError(state);

        expect(error).toBeNull();
    });

    test('status', () => {
        const status = selectStatus(state);

        expect(status).toBe(REQUEST_STATUS.IDLE);
    });

    test('isInitialized', () => {
        const isInitialized = selectIsInitialized(state);

        expect(isInitialized).toBeFalsy();
    });

    test('isUserAuth', () => {
        const isUserAuth = selectIsUserAuth(state);

        expect(isUserAuth).toBeTruthy();
    });
});

export {};
