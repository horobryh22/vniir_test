import { LoginResponse } from 'api';

export const setValueToLocalStorage = (payload: LoginResponse | string): void => {
    if (!payload) return;

    if (typeof payload === 'string') return;

    if ('accessToken' in payload) {
        window.localStorage.setItem('token', payload.accessToken!);
    }
};
