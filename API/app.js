const express = require("express"),
  cors = require("cors"),
  app = express(),
  routes = require("./routes/routes")
  // fileupload = require("express-fileupload")

app.use(cors());
app.use(express.json()) 
// app.use(express.urlencoded({extended: false}))
// app.use(fileupload())
app.use(express.static(__dirname + "public"));

app.use("/api", routes);

app.listen(3030, console.log("connected to port:", 3030));

