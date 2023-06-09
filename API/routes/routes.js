const express = require("express");
const CronJob = require("cron");
const { signupController } = require("../controllers/AuthController");
const routes = express.Router();
const middleware = require("../middlewares");
const fileupload = require("express-fileupload");
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
  verifyStudent_id_BeforeMarkingAttendanceController,
  markedAttendance,
  auto_mark,
} = require("../controllers/attendClassController");
const { showAllAttendance } = require("../controllers/AttendanceController");
const {
  fetchAttendance_for_course,
} = require("../controllers/attendClassController");
const { upload } = require("../middlewares/fileupload");
const { verifyFace } = require("../controllers/verifyFace");

routes.get("/", getStudentController);
routes.post("/enrol" , signUpController);
routes.post("/login", loginController);

routes.get("/get-student", middleware.authToken, getStudentController);
routes.post("/get-student", middleware.authToken, editMyDetailsController);
routes.get("/get-students", middleware.authToken, getStudentsController);
routes
  .route("/mark-attendance")
  .post(middleware.authToken, attendanceClassController)
  .get(middleware.authToken, fetchAttendance_for_course);
routes.post(
  "/verify-student",
  verifyStudent_id_BeforeMarkingAttendanceController
);
routes.get("/marked-attendance", middleware.authToken, markedAttendance);
routes.get("/attendance", middleware.authToken, showAllAttendance);

routes.get("/create-admin", setAdminController);
routes.post("/auto-mark-attendance", middleware.authToken, auto_mark);

routes.post("/compare-faces",upload.single("video"), verifyFace)

module.exports = routes;
