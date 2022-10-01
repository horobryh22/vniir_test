import { UserType } from 'types';

export type LoginResponse = {
    accessToken: string;
    user: UserType;
};
