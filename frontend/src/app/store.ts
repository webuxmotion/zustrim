import { configureStore } from '@reduxjs/toolkit';
import userReducer from '@/features/user/userSlice';
import friendsReducer from '@/features/dashboard/FriendsSidebar/friendsSlicer';
import roomReducer from '@/features/room/roomSlice';
import { baseApi } from '@/api/baseApi';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    user: userReducer,
    friends: friendsReducer,
    room: roomReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'room/setLocalStream',
          'room/setRemoteStreams'
        ],
        ignoredPaths: [
          'room.localStream',
          'room.remoteStreams'
        ],
      },
    }).concat(baseApi.middleware),
});

store.subscribe(() => {
  const user = store.getState().user;
  if (user) {
    localStorage.setItem('user', JSON.stringify(user));
  } else {
    localStorage.removeItem('user');
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;