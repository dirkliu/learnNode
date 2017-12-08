const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const routes = require('./routes');

http.createServer((req, res) => {
   var pathname = url.parse(req.url).pathname;
   var fileType=pathname.split('.').pop()

   if(pathname.indexOf('/download/' === 0)) {
     // res.set({
     //   'Content-type': 'application/octet-stream',
     //   'Content-Disposition': 'attachment;filename=download.text'
     // })
     res.setHeader('Content-type', 'application/octet-stream');
     res.setHeader('Content-Disposition', 'attachment;filename=download.text');
     fs.createReadStream(path.join(__dirname, 'README.md')).pipe(res)
     return
   }
   fs.readFile(path.join(__dirname, pathname), function (err, file) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html;charset:utf-8"});
            res.end('404,Not found!');
            return;
        }

        switch (fileType) {
          case 'html':0
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
