var fs = require('fs');

var data = fs.readFileSync('http-server.js', 'utf-8');
console.log(data);
console.log('end.');