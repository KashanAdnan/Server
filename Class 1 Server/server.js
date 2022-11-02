var express = require("express");
var app = express();

const PORT = 3000;
app.get("/home", function (req, res) {
  res.end("Welcome To Home Page !");
});
app.get("/contact", function (req, res) {
  res.end("Welcome To Contact Page !");
});
app.get("/about", function (req, res) {
  res.end("Welcome To About Page !");
});
app.listen(3000 , () =>{
  console.log("Hello world");
});
