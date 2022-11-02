const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://kashan:kashan654321@cluster0.c6v8zv7.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is Connected");
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is Disconnected");
  process.exit(1);
});

var usre2 = new mongoose.Schema({
  UserName: String,
  Age : String,
  id: Number,
  phoneNumber: String,
});

const signupmodel2 = mongoose.model("SignupData2", usre2);

module.exports = {
  signupmodel2,
};
