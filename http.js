var http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
  res.write('第一个http server!');
  console.log('http server start!')
  res.end();
}).listen(80)
