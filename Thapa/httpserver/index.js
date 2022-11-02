const { log } = require("console");
const http = require("http");

const server = http.createServer((req,res) =>{
    if (req.url == "/") {
        res.end("Hello Home World");
    }else if(req.url == "/about"){
        res.end("Hello About World");
    }else if(req.url == "/contact"){
        res.end("Hello Contact World");
    }else{
        res.writeHead(404)
        res.end("404 Page Page Dosen't Exist");
    }
});
server.listen(3000, "127.0.0.1" ,() =>{
    console.log("listening to port number"  + 3000);
});