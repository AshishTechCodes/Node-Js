const http = require('http');
const url = require('url');

const adr = 'https://www.nasa.gov/nasa-socials/';
const U = url.parse(adr, true);

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    res.write(`Protocol: ${U.protocol}\n`);
    res.write(`Hostname: ${U.hostname}\n`);
    res.write(`Pathname: ${U.pathname}\n`);
    res.write(`Query: ${JSON.stringify(U.query)}\n`);
    
    res.end();
}).listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});