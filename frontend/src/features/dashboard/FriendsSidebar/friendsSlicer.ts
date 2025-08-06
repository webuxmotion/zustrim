import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Friend = { id: string; username: string };

type FriendsState = {
  friends: Friend[];
  pendingFriendsInvitations: Friend[];
  onlineUsers: Friend[];
};

const initialState: FriendsState | null = {
  friends: [],
  pendingFriendsInvitations: [],
  onlineUsers: [],
};

const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    setFriends(state, action: PayloadAction<Friend[]>) {
      if (state) {
        state.friends = action.payload;
      }
    },
    setPendingFriendsInvitations(state, action: PayloadAction<Friend[]>) {
      if (state) {
        state.pendingFriendsInvitations = action.payload;
      }
    },
    setOnlineUsers(state, action: PayloadAction<Friend[]>) {
      if (state) {
        state.onlineUsers = action.payload;
      }
    },
  },
});

export const {
  setFriends,
  setPendingFriendsInvitations,
  setOnlineUsers,
} = friendsSlice.actions;

export default friendsSlice.reducer;
