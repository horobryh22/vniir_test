import axios from 'axios';

export const instance = axios.create({
    baseURL: 'https://onlinetool.in/api',
});
