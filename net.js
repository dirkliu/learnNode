// net 模块提供了创建基于流的 TCP 或 IPC 服务器(net.createServer())和客户端(net.createConnection()) 的异步网络 API。
const net = require('net')

const server = net.createServer((socket) => {
  socket.end('goodbye\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
}).on('close', err => {
  console.log('soket closed')
});

// grab an arbitrary unused port.
server.listen(() => {
  console.log('opened server on', server.address());
});

server.getConnections((err, count) => {
  console.log('connections:', count)
})
