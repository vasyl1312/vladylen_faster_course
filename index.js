const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    // if (req.url === "/") {
    //     fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data);
    //     })
    // } else if (req.url === "/contact") {
    //     fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, data) => {
    //         if (err) throw err;
    //         res.writeHead(200, {
    //             'Content-Type': 'text/html'
    //         })
    //         res.end(data);
    //     })
    // }
    let filePath = path.join(__dirname, 'public', req.url === "/" ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    if (!ext) {
        filePath += '.html';
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            fs.readFile(path.join(__dirname, 'public', 'error.html'), (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Error');
                } else {
                    res.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    res.end(data);
                }
            });
        } else {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            });
            res.end(content);
        }
    })
})

server.listen(3001, () => {
    console.log('Server has been started...');
})