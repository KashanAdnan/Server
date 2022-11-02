// const http = require("http");
// const bodyparser = require("body-parser");
// const express = require("express");
// var SignupDatamodel1 = require("./db.js");
// // var model2 = require("./db2.js");
// const app = express();

var express = require("express");
var fs = require("fs");
var userModelStd = require("./app.js")
var http = require("http");
// var color = require("colors");
// var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var port = 3000;

// const server = http.createServer((req,res) => {
//     res.writeHead(200 , {"ContentType" : "application/json"});
//     res.write(JSON.stringify(model1));
//     res.write(JSON.stringify(model2));
//     res.end("Hello World")
// }).listen(3000 , () =>{
//     console.log("Server is Running on 3000");
// });

// app.post("/data" , (res,req, next) =>{p[]
//         "id" : 1,
//         "phoneNumber" : "03456276164"
//     })
//     userData.save();
//     // res.send("Hello World");
//     // res.send(userData)
// })
// app.listen(3000 , () =>{
//     console.log("Server is Running On Port Number 3000")
// });

// app.use(bodyparser.json());
// app.post("/data", (req, res) => {
//   var myData = new SignupDatamodel1({
//     UserName : req.body.UserName,
//     Age : req.body.Age,
//     id : req.body.id,
//     phoneNumber : req.body.phoneNumber,
//   });
//   myData.save()
//   .then(item =>{
//     res.send("item saved to database");
//   })
//   .catch(err =>{
//     res.status(400).send("unable to save to database")
//   });
// });
// app.listen(3000)

// var mongoose = require("mongoose");
// const data = {
//     name :"Kashan Adnan ",
//     class:"5",
//     age:8,
//     phoneNumber:"03456276164"
// }
// mongoose.connect(
//   "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );

// mongoose.connection.on("connected", () => {
//   console.log("mongoos is connected");
// });

// mongoose.connection.on("disconnected", () => {
//   console.log("mongoos is disconnected");
//   process.exit(1);
// });

// var userSchema = new mongoose.Schema({
//   stdName: String,
//   email: String,
//   rollnumber: String,
//   phoneNumber: String,
//   id: Number,
//   data: { type: Date, default: Date.now },
// });
// var NewUsers = mongoose.model("NewUsers", userSchema);

// module.exports = {
//     userModelStd
// }

// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );
app.use(bodyParser.json());
app.post("/user", (req, res, next) => {
  // if (req.body.stdName
  //     || req.body.email
  //     || req.body.rollNumber
  //     || req.body.phoneNumber
  //     || req.body.id) {
  //     res.status(405).send(`
  //     please send complete information
  //     e.g:
  //     {
  //         "name": "xyz",
  //         "email": "xyz@gmail.com",
  //         "password": "1234",
  //         "phone": "01312314",
  //         "id":2
  //     }`);
  //     return
  // };

  var newPerson = userModelStd({
    "stdName" : req.body.stdName,
    "email" : req.body.email,
    "rollNumber" : req.body.rollNumber,
    "phoneNumber" : req.body.phoneNumber,
    "id" : req.body.id,
  });
  // JSON.parse(newPerson)
  newPerson.save((err, data) => {
    if (!err) {
      console.log(data);
      res.status(200).send({
        message: "User created",
        data,
      });
      console.log("user created");
    } else {
      console.log("==>>", err);
      res.status(405).send({
        message: "user creation faild",
      });
    }
  });
});
app.listen(port, () => {
  console.log("server is running on", port);
});
