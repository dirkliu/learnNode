var http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/octet-stream',
    'Content-Disposition': 'attachment; filename=prize-area.png',
  });
  //res.write('第一个http server!');
  console.log('http server start!')
  fs.readFile('./prize-area.png', function (err, file) {
    res.end(file);
  })
}).listen(80)
