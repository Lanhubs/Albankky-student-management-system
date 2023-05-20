const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes/routes");
// fileupload = require("express-fileupload")
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(fileupload())
app.use(express.static(__dirname + "public"));

app.use("/api", routes);

app.listen(process.env.PORT || 3030, console.log("connected to port:", 3030));
