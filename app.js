const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
   var pathname = url.parse(req.url).pathname;
   var fileType=pathname.split('.').pop()

   fs.readFile(path.join(__dirname, pathname), function (err, file) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html;charset:utf-8"});
            res.end('404,Not found!');
            return;
        }

        switch (fileType) {
          case 'html':
          case 'htm':
            res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});
            break;
          case 'txt':
            res.writeHead(200, {"Content-Type": "text/plain;charset:utf-8"});
            break;
        }
        res.end(file);
    });
    console.log('Static server is running! ROOT:', __dirname);
 }).listen(80)
