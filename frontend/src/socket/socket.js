import { store } from '@/app/store';
import { setFriends, setPendingFriendsInvitations } from '@/features/dashboard/FriendsSidebar/friendsSlicer';
import io from 'socket.io-client';

let socket = null;
const SOCKET_URL = import.meta.env.MODE === "development" ? "http://localhost:5002" : "https://zustrim.onrender.com"

export const connectSocket = (user) => {
  if (socket && socket.connected) {
    console.log('⚠️ Socket already connected');
    return;
  }

  if (socket) {
    console.log('♻️ Cleaning up stale socket');
    socket.disconnect();
    socket = null;
  }

  const jwtToken = user.token;

  if (!socket || !socket.connected) {
    socket = io(SOCKET_URL, {
      auth: {
        token: jwtToken
      }
    });

    socket.on('connect', () => {
      console.log('✅ connected. Socket id:', socket.id);
    });

    socket.on('friends-invitations', (data) => {
      const { pendingInvitations } = data;

      store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

    socket.on('friends-list', (data) => {
      const { friends } = data;

      store.dispatch(setFriends(friends));
    })
  } else {
    console.log('⚠️ Socket already connected');
  }
};

export const disconnectSocket = () => {
  if (socket) {
    console.log('🔌 Disconnecting socket...');
    socket.disconnect();
    socket = null;
  }
};

export const getSocket = () => socket;