import { baseApi } from "./baseApi";


export const friendsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendFriendInvitation: builder.mutation<{ success: boolean }, { email: string }>({
      query: (body) => ({
        url: 'friend-invitation/invite',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSendFriendInvitationMutation,
} = friendsApi;