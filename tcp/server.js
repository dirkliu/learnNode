const net = require('net');
const server = net.createServer(socket => {
	// 新的连接
	socket.on('data', data => {
		socket.write(data)
	});

	socket.on('end', () => {
		console.log('断开连接')
	});

	socket.write('Welcome to mywrold')
});

server.listen(8124, () => {
	console.log('server bound')
})