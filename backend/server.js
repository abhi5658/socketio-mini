const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});

io.on('connection', (socket) => {
    // console.log('socket connected:', socket);

    socket.on('chat', (payload) => {
        console.log('chat event:', payload);
        io.emit('chat', payload);
    });
});

server.listen(5000, () => console.log('server listening at 5000'))