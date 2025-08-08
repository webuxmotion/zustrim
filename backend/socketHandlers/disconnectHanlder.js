const serverStore = require('../serverStore');
const { updateOnlineUsers } = require('./update/users');

const disconnectHanlder = async (socket) => {
    serverStore.removeConnectedUser(socket.id);

    updateOnlineUsers();
}

module.exports = disconnectHanlder