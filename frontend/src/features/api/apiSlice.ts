import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5002/api/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('token');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        login: builder.mutation<LoginResponse, LoginRequest>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<RegisterResponse, RegisterRequest>({
            query: (credentials) => ({
                url: 'auth/register',
                method: 'POST',
                body: credentials,
            }),
        }),
        checkAuth: builder.query<{ success: boolean; user?: any }, void>({
            query: () => 'auth/check',
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLazyCheckAuthQuery, useCheckAuthQuery } = api;

export type LoginRequest = {
    email: string;
    password: string;
};

export type LoginResponse = {
    user: {
        id: string;
        email: string;
        name: string;
        token: string;
    };
};

export type RegisterRequest = {
    username: string;
    email: string;
    password: string;
};

export type RegisterResponse = {
    user: {
        id: string;
        email: string;
        name: string;
        token: string;
    };
};