const serverStore = require('../serverStore');
const { updateFriendsPendingInvitations, updateFriends } = require('./update/friends');
const { updateRooms } = require('./update/rooms');
const { updateOnlineUsers } = require('./update/users');

const newConnectionHandler = async (socket) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });

    await updateFriendsPendingInvitations(userDetails.userId);
    await updateFriends(userDetails.userId);
    await updateOnlineUsers();

    updateRooms(socket.id);
}

module.exports = newConnectionHandler