const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/getSecretData'){
    res.end('Secret Data: 42');  // sending secret data to client
    }
    else {
    res.end('Hello from server!');  // sending response to client
    }
});  // server created

server.listen(7777);
