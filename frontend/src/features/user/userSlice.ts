// src/features/user/userSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserDetails = {
  token: string;
  username: string;
  email: string;
};

const loadUserFromStorage = (): UserDetails | null => {
  const data = localStorage.getItem('user');
  return data ? JSON.parse(data) : null;
};

const initialState: UserDetails | null = loadUserFromStorage();

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (_, action: PayloadAction<UserDetails>) => {
      return action.payload;
    },
    clearUserDetails: () => null,
  },
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;