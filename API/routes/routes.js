const express = require("express");
const { signupController } = require("../controllers/AuthController");
const routes = express.Router();
const middleware = require("../middlewares");
const {
  signUpController,
  loginController,
  getStudentController,
  editMyDetailsController,
  getStudentsController,
} = require("../controllers");
const { setAdminController } = require("../controllers/setAdmin");
const {
  attendanceClassController,
  verifyFingerPrintBeforeMarkingAttendanceController,
} = require("../controllers/attendClassController");
const { showAllAttendance } = require("../controllers/AttendanceController");

routes.get("/", getStudentController);
routes.post("/enrol", middleware.upload.single("profilePic"), signUpController);
routes.post("/login", loginController);

routes.get("/get-student", middleware.authToken, getStudentController);
routes.post("/get-student", middleware.authToken, editMyDetailsController);
routes.get("/get-students", middleware.authToken, getStudentsController);
routes
.route("/mark-attendance")
  .post(middleware.authToken, attendanceClassController)
  .get(
    middleware.authToken,
    verifyFingerPrintBeforeMarkingAttendanceController
  );
  routes.get("/attendance", middleware.authToken,showAllAttendance)

routes.post("/create-admin", setAdminController);

module.exports = routes;
