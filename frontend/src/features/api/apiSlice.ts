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
        testAuth: builder.query<string, void>({   // 👈 Add this block
            query: () => 'auth/test',
        }),
    }),
});

export const { useLoginMutation, useLazyTestAuthQuery } = api;

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