var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('fileapp.txt', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(data);
    return res.end();
  });
}).listen(7070);