'use strict';

const http = require('http');
const route = require('./route')

http.createServer((req, res) => {
  let data = '';
  req.on('data', (chunk) => {
    data += chunk;
  });

  req.on('end', () => {
    let postBody = {};
    if (data) {
      postBody = JSON.parse(data)
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    route(req, res, postBody);
    res.end();
  });
}).listen(3000, 'localhost');
