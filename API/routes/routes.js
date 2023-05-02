const express = require("express")
const { signupController } = require("../controllers/AuthController")
const routes = express.Router()
const middleware = require("../middlewares")
const {
    signUpController,
    loginController,
  
    getStudentController,
    getStudentsController,

    editMyDetailsController
} = require("../controllers")

routes.get("/", getStudentController)
routes.post("/enrol-student", middleware.upload.single("profilePic"), signUpController)
routes.post("/login", loginController)

routes.post("/get-students", middleware.authToken, getStudentsController)
routes.post("/get-student", middleware.authToken, getStudentController)
routes.post("/get-student", middleware.authToken, editMyDetailsController)



module.exports = routes