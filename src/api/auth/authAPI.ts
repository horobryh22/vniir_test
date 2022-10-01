import { LoginResponse } from 'api';
import { instance } from 'api/config';
import { FormValues } from 'types';

export const authAPI = {
    login: (userData: FormValues) => {
        return instance.post<LoginResponse>('/login', userData);
    },
};
