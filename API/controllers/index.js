const { signUpController, loginController } = require("./AuthController");
const {
  getStudentsController,
  removeStudentController,
  editStudentDetailsController,
} = require("./studentsController");
const {
  getStudentController,
  editMyDetailsController,
} = require("./studentController");

module.exports = {
  signUpController,
  loginController,
  getStudentsController,
  removeStudentController,
  editStudentDetailsController,
  getStudentController,
  editMyDetailsController,
};
