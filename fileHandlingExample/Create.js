const http = require('http');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'prac1.json');

const server = http.createServer(async(req,res)=>{
    try{
        await fs.promises.writeFile(filePath, JSON.stringify({}), 'utf8');
        let responseHTML = '<h2>File created:</h2>';
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(responseHTML);
    }
    catch(err){
        res.writeHead(500,{'content-type':'text/html'});
        res.end(`<h1>ERROR:</h1>${err.message}`);
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});