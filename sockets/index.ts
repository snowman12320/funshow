import { Server, Socket } from 'socket.io';

let userCount = 0;

export default function (io: Server) {
  io.on('connection', (socket: Socket) => {
    let username = userCount === 0 ? 'Player A' : 'Player B';
    socket.broadcast.emit('assign username', username);
    if (userCount === 0) userCount += 1;

    socket.on('send message', (data) => {
      socket.broadcast.emit('new message sent', data);
    });

    socket.on('join room', (room) => {
      socket.join(room);
    });

    socket.on('disconnect', (reason) => {
      console.log('socket disconnected by restart than userCount is', userCount);
      io.emit('user disconnected', socket.id);
    });
  });
}
