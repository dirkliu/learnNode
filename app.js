const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
//   var stream = fs.createReadStream('./home.html')
//   let body = ''
//   stream.on('data', chunk => {
//     body += chunk
//     console.log('chunk:', chunk)
//   })
//   stream.on('end', () => {
//     res.write(body)
//     res.end()
//   })
//  }).listen(80)

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname;
  let fileType=pathname.split('.').pop()
  console.log('pathname:', pathname)
  switch (fileType) {
    case 'html':
    case 'htm':
      res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
      break
    case 'txt':
      res.writeHead(200, {"Content-Type": "text/plain;charset=utf-8"});
    case 'png':
      res.writeHead(200, {
        "Content-Type": "image/png",
        "Cache-Control": "max-age=3000000"
      })
      break
    case 'css':
      res.writeHead(200, {
        "Coontent-Type": "text/css;charset=utf-8"
      })
      break
    case 'js':
      res.writeHead(200, {
        "Content_Type": "application/x-javascript;charset=utf-8"
      })
      break
  }
  //var stream = fs.createReadStream('./home.html')
  fs.readFile(path.join(__dirname, pathname), (err, file) => {
    res.end(file)
  })
 }).listen(8765)
