const serverStore = require('../serverStore');
const roomLeaveHandler = require('./roomLeaveHandler');
const { updateOnlineUsers } = require('./update/users');

const disconnectHanlder = async (socket) => {
    const activeRooms = serverStore.getActiveRooms();

    activeRooms.forEach(activeRoom => {
        const userInRoom = activeRoom.participants.some(
            participant => participant.socketId === socket.id
        );

        if (userInRoom) {
            roomLeaveHandler(socket, { roomId: activeRoom.roomId })
        }
    })

    serverStore.removeConnectedUser(socket.id);

    updateOnlineUsers();
}

module.exports = disconnectHanlder