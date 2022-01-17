const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })

    res.end('<h1>Hello World</h1>');
})

server.listen(3001, () => {
    console.log('Server has been started...');
})