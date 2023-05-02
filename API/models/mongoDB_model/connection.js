const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
mongoose
  .connect("mongodb://127.0.0.1:27017/albankky-student-management-system")
  .then((success) => console.log("Database connected successfully"))
  .catch((e) => console.log(e));
mongoose.set("strictQuery", true);
module.exports = mongoose;
