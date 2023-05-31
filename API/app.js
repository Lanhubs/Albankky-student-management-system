const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const routes = require("./routes/routes");
fileupload = require("express-fileupload");
require("dotenv").config();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
/* app.use(fileupload({
    createParentPath: true,
    tempFileDir: "/images",
    useTempFiles: true
})) */
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(__dirname + "public"));

app.use("/api", routes);

app.listen(process.env.PORT || 3030, console.log("connected to port:", 3030));
