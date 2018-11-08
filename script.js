var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', function (err, html) {
            response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            response.write(html);
            response.end();
        });
    } else {
        response.statusCode = 404;
        response.write('<img src="https://www.howtogeek.com/wp-content/uploads/2018/05/2018-06-03-1.png" alt="Smiley face" height="213" width="462">');
        response.end();
    }
});

server.listen(8080);