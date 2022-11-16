const http = require('http');
const { readFileSync } = require('fs');

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css')


const server = http.createServer((req, res) => {
    console.log(req.url);

    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(homePage)
        res.end("Welcome board, you hit the server")
    } else if (url == '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(homeStyles);
        res.end();
    } else {
        res.writeHead(404, { "content-type": 'text/plain' })
        res.write("It seems we can not find the address you provided")
        res.end();
    }
})

server.listen(5000, () => console.log("Server listening on port 5000..."));