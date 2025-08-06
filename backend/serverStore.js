const connectedUsers = new Map();

const addNewConnectedUser = ({ socketId, userId }) => {
    connectedUsers.set(socketId, { userId });

    console.log('connectedUsers after adding', connectedUsers);
};

const removeConnectedUser = (socketId) => {
    if (connectedUsers.has(socketId)) {
        connectedUsers.delete(socketId);

        console.log('connectedUsers after deleting', connectedUsers);
    }
}

module.exports = {
    addNewConnectedUser,
    removeConnectedUser,
}