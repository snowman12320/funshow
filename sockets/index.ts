import { Server, Socket } from 'socket.io';

let userCount = 0;

export default function (io: Server) {
  io.on('connection', (socket: Socket) => {
    // assign username
    // let username = userCount === 0 ? 'Player A' : 'Player B';
    // socket.broadcast.emit('assign username', username);
    // if (userCount === 0) userCount += 1;

    userCount += 1;
    // console.log('new user connected1', userCount);
    socket.on('connection', () => {
      io.emit('new user connected');
    });

    socket.on('send message', (data) => {
      console.log('new message sent1', data);
      // x
      socket.broadcast.emit('new message sent', data);
    });

    // x
    // socket.on('join room', (room) => {
    //   socket.join(room);
    //   console.log('user joined room', room);
    // });

    // 成功訊息傳遞範本
    socket.on('disconnect', (reason) => {
      io.emit('user disconnected', socket.id);
    });
  });
}
