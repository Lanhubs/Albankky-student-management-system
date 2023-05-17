const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();
mongoose
  .connect(
    // process.env.MONGO_URI ||
      "mongodb://127.0.0.1:27017/albankky-student-management-system",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then((success) => console.log("Database connected successfully"))
  .catch((e) => console.log(e));
mongoose.set("strictQuery", true);
module.exports = mongoose;
