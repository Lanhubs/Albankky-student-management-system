const express = require("express")
const { signupController } = require("../controllers/AuthController")
const routes = express.Router()
const middleware = require("../middlewares")
const {
    sigupController,
    loginController,
    authToken,
    getStudentsController,
    upload
} = require("./controllers")

routes.get("/", getStudentsController)
routes.post("/signup", middleware.upload.single("profilePic"), signupController)
