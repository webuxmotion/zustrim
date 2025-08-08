const serverStore = require('../serverStore');
const { updateFriendsPendingInvitations } = require('./update/friends');

const newConnectionHandler = async (socket, io) => {
    const userDetails = socket.user;

    serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });

    updateFriendsPendingInvitations(userDetails.userId);
}

module.exports = newConnectionHandler