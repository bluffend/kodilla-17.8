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
        fs.readFile('./image/404error.png', function (err, content) {
            if (err) {
                response.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                response.end("No such image");
            } else {
                response.writeHead(200, { 'Content-type': 'image/png' });
                response.end(content);
            }
        });
    }
});

server.listen(9000);
