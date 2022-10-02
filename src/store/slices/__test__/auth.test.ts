import { authReducer, logout, setIsUserAuth } from 'store/slices';
import { login } from 'store/thunks';
import { AuthStateType } from 'store/types';

let startState: AuthStateType;

beforeEach(() => {
    startState = {
        isUserAuth: false,
    };
});

test('if user is logged, value isUserAuth should be true', () => {
    const endState = authReducer(startState, login.fulfilled);

    expect(endState.isUserAuth).toBeTruthy();
});

test('if user is logged out, value isUserAuth should be false', () => {
    const endState = authReducer(startState, logout);

    expect(endState.isUserAuth).toBeFalsy();
});

test('if app is initialized and local storage has token, value isUserAuth should be true', () => {
    const endState = authReducer(startState, setIsUserAuth(true));

    expect(endState.isUserAuth).toBeTruthy();
});
