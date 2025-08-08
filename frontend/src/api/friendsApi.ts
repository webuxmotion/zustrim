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

    acceptFriendInvitation: builder.mutation<{ success: boolean }, { id: string }>({
      query: (body) => ({
        url: `friend-invitation/accept`,
        method: 'POST',
        body,
      }),
    }),

    rejectFriendInvitation: builder.mutation<{ success: boolean }, { id: string }>({
      query: (body) => ({
        url: `friend-invitation/reject`,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useSendFriendInvitationMutation,
  useAcceptFriendInvitationMutation,
  useRejectFriendInvitationMutation,
} = friendsApi;