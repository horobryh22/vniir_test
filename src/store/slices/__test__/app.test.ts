import { REQUEST_STATUS } from 'enums';
import { appReducer, setAppError, setAppStatus, setIsAppInitialized } from 'store/slices';
import { AppStateType } from 'store/types';

let startState: AppStateType;

let error: string;

beforeEach(() => {
    error = 'some error';

    startState = {
        error: null,
        status: REQUEST_STATUS.IDLE,
        isInitialized: false,
    };
});

test('correct app status should be set', () => {
    const endState = appReducer(startState, setAppStatus(REQUEST_STATUS.LOADING));

    expect(endState.status).toBe(REQUEST_STATUS.LOADING);
    expect(endState.error).toBeNull();
});

test('the error should be set inside app state', () => {
    const endState = appReducer(startState, setAppError(error));

    expect(endState.error).toBe(error);
    expect(endState.status).toBe(REQUEST_STATUS.IDLE);
});

test('app should be initialized when initialization finished with success', () => {
    const endState = appReducer(startState, setIsAppInitialized(true));

    expect(endState.isInitialized).toBeTruthy();
});
