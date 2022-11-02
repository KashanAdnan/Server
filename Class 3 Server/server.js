var express = require("express");
var fs = require("fs");
var http = require("http");
var color = require("colors");
var data = require("./app.js");

http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.write(JSON.stringify(data));
  })
  .listen(5000);

// var app = express();
// const PORT = 3000;
// fs.writeFile("index.html", "<h1>Hello World</h1>" , (err,data) => {
//     console.log(data);
// });
// fs.readFile("index.html","utf-8", (err,data) =>{
//     console.log(data);
// })

// app.get("/" , (req,res) =>{
//     res.end("<h1>This is Class 3</h1>");
// });
// app.listen(PORT , () =>{
//     console.log("Server is Running On "  + PORT)
// });
