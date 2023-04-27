const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
mongoose
  .connect("mongodb://127.0.0.1:27017/LiamsDB")
  .then((success) => console.log("Database connected successfully"))
  .catch((e) => console.log(e))
mongoose.set("strictQuery", true)
  const Schema = mongoose.Schema
module.exports =  mongoose
