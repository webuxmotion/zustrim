const authSocket = require('./middleware/authSocket');
const disconnectHanlder = require('./socketHandlers/disconnectHanlder');
const newConnectionHandler = require('./socketHandlers/newConnectionHandler');
const serverStore = require('./serverStore');

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
        console.log('user connected');
        console.log(socket.id);

        newConnectionHandler(socket, io);

        socket.on('disconnect', () => {
            disconnectHanlder(socket);
        });
    });
};

module.exports = {
    registerSocketServer
}