import { instance } from 'api/config';
import { LoginResponse } from 'api/types/LoginResponse';
import { FormValues } from 'types';

export const authAPI = {
    login: (userData: FormValues) => {
        return instance.post<LoginResponse>('/login', userData);
    },
};
