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
const { setAdminController } = require("../controllers/setAdmin")

routes.get("/", getStudentController)
routes.post("/enrol", middleware.upload.single("profilePic"), signUpController)
routes.post("/login", loginController)


routes.post("/get-students", middleware.authToken, getStudentsController)
routes.get("/get-student", middleware.authToken, getStudentController)
routes.post("/get-student", middleware.authToken, editMyDetailsController)
routes.post("/set-admin", setAdminController)



module.exports = routes