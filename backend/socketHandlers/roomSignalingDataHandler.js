const roomSignalingDataHandler = (socket, data) => {
    const { connUserSocketId, signal } = data;

    const signalData = { signal, connUserSocketId: socket.id };
    socket.to(connUserSocketId).emit('conn-signal', signalData);
}

module.exports = roomSignalingDataHandler;