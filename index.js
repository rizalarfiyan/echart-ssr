const http = require('http');

const PORT = 8080;
const server = http.createServer((req, res) => {
    req.on('error', err => {
        console.error(err);
        res.statusCode = 400;
        res.end('400: Bad Request');
        return;
    });

    res.on('error', err => {
        console.error(err);
        res.statusCode = 500;
        res.end('500: Internal Server Error');
        return;
    });

    if (req.url === '/' && req.method === 'GET') {
        res.end('Welcome!');
        return;
    }

    res.statusCode = 404;
    res.end('404: Page Not Found');
});

server.listen(PORT, () => {
    console.log('Example app listening on port ' + PORT);
});