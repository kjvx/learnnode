const http = require('http');

const server = http.createServer((req, res) => {
    console.log('request:', req.url);
    console.log(req);
    if(req.url === '/') { 
        res.write("homepage");
    }
    if(req.url === '/awooga') { 
        res.write("homepage awooga");
    }
    res.end(`<style> p1 {
        color: blue;
    } </style>
    <p1>This is a test</p1>`)
 })


server.listen(8080)