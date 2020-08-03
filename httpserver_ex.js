const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const f = fs.createReadStream('index.html');
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        f.pipe(res);
    }
    else {
        res.write('<h1> Return to home plz </h1>');
        res.end();
    }
}).listen('8080');
