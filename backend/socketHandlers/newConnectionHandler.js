const serverStore = require('../serverStore');
const { updateFriendsPendingInvitations, updateFriends } = require('./update/friends');
const { updateOnlineUsers } = require('./update/users');

const newConnectionHandler = async (socket) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });

    updateFriendsPendingInvitations(userDetails.userId);
    updateFriends(userDetails.userId);
    updateOnlineUsers();
}

module.exports = newConnectionHandler