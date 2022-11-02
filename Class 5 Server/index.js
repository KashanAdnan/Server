var express = require("express");
var fs = require("fs")
var http = require("http")
var color = require("colors")
// var UserModelStd = require("./app")
var cors = require("cors")
var app = express();
var bodyParser = require("body-parser")
// class 1


var port = 3000;

// app.get("/",function(req,res){

//         res.send("Hello World !")
//     })

// app.get("/home",(req,res)=>{
//     res.send("welcome to home page ")
// })


//class 2

//  fs.writeFileSync("text.txt","My Name is ahmer",(err,data)=>{
//     console.log("file created")
//  })

//  fs.writeFile("saqib.txt","hey my name is saqib ",(err,data)=>{
//     console.log("====> this is saqib file",(data))
//  })
//  fs.readFile("./saqib.txt","utf-8",(err,data)=>{
//     console.log(data)
//  })


//  fs.appendFile("./text.txt"," new add nh karoga",(err,data)=>{
// console.log(err)
//  })
// fs.readFile("./text.txt",'utf-8',(err,data)=>{
// console.log(data)
// })

// class 3rd



// fs.readFile("text.txt","utf-8",(err,data)=>{
//     console.log(data)
// })


// http.createServer((req,res)=>{
//     res.writeHead(200, {'Content-Type':'application/json'});
//     res.write(JSON.stringify(userModel))
// }).listen(port,()=>{
//     console.log("server is running on " .rainbow , port )
// })

// http.createServer((req,res)=>{
// res.writeHead(200,{'Content-Type':'application/json'});
// res.write(JSON.stringify({
//     name:"sheikh ahmer ali",
//     class:"bscs"
// }))

// }).listen(5000)



// app.listen(port, ()=>{
//     console.log("server is running on" , port)
// })



// class 4


// this link for node js server;
// https://www.tutorialspoint.com/nodejs/index.htm#




// this link for officicial documentaion of database mongo db 
// https://mongoosejs.com/docs/5.x/docs/deprecations.html



// class 5 





var mongoose = require("mongoose");
// const data = {
//     name :"Kashan Adnan ",
//     class:"5",
//     age:8,
//     phoneNumber:"03456276164"
// }
mongoose.connect("mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on("connected", ()=>{
console.log("mongoos is connected")
})

mongoose.connection.on("disconnected", ()=>{
    console.log("mongoos is disconnected");
    process.exit(1)
    })
    
var userSchema = new mongoose.Schema({
    stdName : String,
    email : String,   
    rollnumber : String,
    phoneNumber : String,
    id : Number,
    data:{type:Date,default:Date.now}
})
var NewUsers = mongoose.model("NewUsers", userSchema)


// module.exports = {
//     userModelStd    
// }





app.use(cors({
    origin: '*',
    credentials: true
}))
app.use(bodyParser.json())
app.post('/user', (req, res, next) => {

    // if (!req.body.stdName
    //     || !req.body.email
    //     || !req.body.rollNumber
    //     || !req.body.phoneNumber
    //     || !req.body.id) {
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



    var newPerson = NewUsers({
        "stdName": req.body.stdName,
        "email": req.body.email,
        "rollNumber": req.body.rollNumber,
        "phoneNumber": req.body.phoneNumber,
        "id": req.body.id,
    });
// JSON.parse(newPerson)
    newPerson.save((err, data) => {
        if (!err) {
            console.log(data)
            res.status(200).send({
                message: "User created",
                data

            })
            console.log("user created")
        } else {
            console.log("==>>", err)
            res.status(405).send({
                message: "user creation faild"
            })
        };

    })
});
app.listen(port, () => {
    console.log("server is running on", port)
})