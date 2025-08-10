const authSocket = require('./middleware/authSocket');
const disconnectHanlder = require('./socketHandlers/disconnectHanlder');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const serverStore = require('./serverStore');
const roomCreateHandler = require('./socketHandlers/roomCreateHandler');
const roomJoinHandler = require('./socketHandlers/roomJoinHandler');
const roomLeaveHandler = require('./socketHandlers/roomLeaveHandler');

const registerSocketServer = (server) => {
    const io = require('socket.io')(server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    });

    serverStore.setSocketServerInstance(io);

    io.use((socket, next) => {
        authSocket(socket, next);
    });

    io.on('connection', (socket) => {
        newConnectionHandler(socket, io);

        socket.on('room-create', () => {
            roomCreateHandler(socket);
        });

        socket.on('room-join', (data) => {
            roomJoinHandler(socket, data);
        });

        socket.on('room-leave', (data) => {
            roomLeaveHandler(socket, data);
        })

        socket.on('disconnect', () => {
            disconnectHanlder(socket);
        });
    });
};

module.exports = {
    registerSocketServer
}