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
    console.log('🟢 Connecting socket...');
    socket = io(SOCKET_URL, {
      auth: {
        token: jwtToken
      }
    });

    socket.on('connect', () => {
      console.log('✅ connected with socket');
      console.log(socket.id);
    });
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