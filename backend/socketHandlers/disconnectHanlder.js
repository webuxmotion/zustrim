const serverStore = require('../serverStore');

const disconnectHanlder = async (socket) => {
    serverStore.removeConnectedUser(socket.id);
}

module.exports = disconnectHanlder