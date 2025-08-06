import { baseApi } from "./baseApi";

export const authApi = baseApi.injectEndpoints({
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

export const {
  useLoginMutation,
  useRegisterMutation,
  useCheckAuthQuery,
  useLazyCheckAuthQuery,
} = authApi;
