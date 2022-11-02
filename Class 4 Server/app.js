var mongoose = require("mongoose");
// const data = {
//     name :"Kashan Adnan ",
//     class:"5",
//     age:8,
//     phoneNumber:"03456276164"
// }
mongoose.connect("mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true})

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
    id:Number,
    data:{type:Date,default:Date.now}
})
var userModelStd = mongoose.model("NewUsers", userSchema)


module.exports = {
    userModelStd    
}