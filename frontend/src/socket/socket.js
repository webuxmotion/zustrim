import { store } from '@/app/store';
import { setFriends, setOnlineUsers, setPendingFriendsInvitations } from '@/features/dashboard/FriendsSidebar/friendsSlicer';
import io from 'socket.io-client';
import roomHandler from './roomHandler';
import webRTCHandler from './webRTCHandler';


const SOCKET_URL = import.meta.env.MODE === "development" ? "http://localhost:5002" : "https://zustrim.onrender.com";

// Reuse socket between hot reloads
let socket = window.__SOCKET__ || null;

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

    window.__SOCKET__ = socket;

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
    });

    socket.on('online-users', (data) => {
      const { onlineUsers } = data;

      store.dispatch(setOnlineUsers(onlineUsers));
    });

    socket.on('room-create', (data) => {
      roomHandler.newRoomCreated(data);
    });

    socket.on('active-rooms', (data) => {
      roomHandler.updateActiveRooms(data);
    });

    socket.on('conn-prepare', (data) => {
      const { connUserSocketId } = data;
      webRTCHandler.prepareNewPeerConnection({ connUserSocketId, initiator: false });
      socket.emit('conn-init', { connUserSocketId });
    });

    socket.on('conn-init', (data) => {
      const  { connUserSocketId } = data;
      webRTCHandler.prepareNewPeerConnection({ connUserSocketId, initiator: true });
    });

    socket.on('conn-signal', (data) => {
      webRTCHandler.handleSignalingData(data);
    });

    socket.on('room-participant-left', (data) => {
      webRTCHandler.handleParticipantLeftRoom(data);
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
    window.__SOCKET__ = null;
  }
};

export const getSocket = () => socket;

export const createNewRoom = () => {
  socket.emit('room-create');
}

export const joinRoom = (data) => {
  socket.emit('room-join', data);
}

export const leaveRoom = (data) => {
  socket.emit('room-leave', data);
}

export const signalPeerData = (data) => {
  socket.emit('conn-signal', data);
}