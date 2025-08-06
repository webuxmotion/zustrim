import io from 'socket.io-client';

let socket = null;

export const connectSocket = () => {
  if (!socket || !socket.connected) {
    console.log('🟢 Connecting socket...');
    socket = io('http://localhost:5002');

    socket.on('connect', () => {
      console.log('✅ connected with socket');
      console.log(socket.id);
    });
  } else {
    console.log('⚠️ Socket already connected');
  }
};