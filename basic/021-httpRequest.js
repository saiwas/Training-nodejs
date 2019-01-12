var http = require('http')

var server = new http.Server();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Node.js</h1>');
    res.end('<p>Request Event</p>');
})

server.listen(3000);

console.log('Http server is listening at port 3000.');