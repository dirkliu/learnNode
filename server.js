/**
 * 静态文件服务器
 */
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
   // console.log('url req:',  url.parse(req.url))
   var pathname = url.parse(req.url).pathname;
   fs.readFile(path.join(__dirname, pathname), function (err, file) {
        if (err) {
            res.writeHead(404, {"Content-Type": "text/html;charset:utf-8"});
            res.end('404,Not found!');
            return;
        }
        res.writeHead(200, {"Content-Type": "text/html;charset:utf-8"});
        res.end(file);
    });
    console.log('Static server is running! ROOT:', __dirname);
 }).listen(80)
