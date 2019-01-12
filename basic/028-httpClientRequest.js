var http = require('http');

var contents = {
    "userId":"tom",
	"password":"321"
}

var options = {
  host: '115.159.100.48',
  path: '/api/login',
  port: 8080,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

var req = http.request(options, function(res) {
  res.setEncoding('utf8');
  res.on('data', function (data) {
    console.log(data);
  });
});

req.write(JSON.stringify(contents));
req.end();
