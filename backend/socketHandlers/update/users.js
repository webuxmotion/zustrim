const serverStore = require('../../serverStore');

const updateOnlineUsers = async () => {
    const io = serverStore.getSocketServerInstance();

    const onlineUsers = serverStore.getOnlineUsers();
    io.emit('online-users', { onlineUsers });
}

module.exports = {
    updateOnlineUsers,
}