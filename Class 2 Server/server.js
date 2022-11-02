var express = require("express");
var fs  =require("fs");

var app = express();

fs.writeFile("text.txt","hello ahmer",(err,data)=>{
console.log(data)
})
// fs.appendFile()
// fs.appendFile("text.txt","new kashan")
fs.readFile("text.txt", "utf-8",(err,data)=>{
    console.log(data)
})

app.get("/", function (req, res) {
    

    res.end("Hello World")
});
app.listen(3000);