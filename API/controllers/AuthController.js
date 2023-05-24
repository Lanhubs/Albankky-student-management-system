const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const {Attendance}= require("../models/mongoDB_model/attendanceModel")
 const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
const { handleErrorMsg } = require("../middlewares/errorHandler");

require("dotenv").config();
const {
  hashPassword,
  comparePasswords,
} = require("../middlewares/passwordHandler");
const signUpController = async (req, res) => {
  try {
    var { password, fingerPrintId, ...rest } = object_null_type_converter(
      req.body
    );

    const profilePic = req.file.path
      .replaceAll("\\", "/")
      .replace("public", "");
    const encryptedPwd = hashPassword(password);

    const docs = new usersModel({
      fullName: rest.fullName,
      email: rest.email,
      password: encryptedPwd,
      courses: [],
      fingerPrintId: fingerPrintId,
      profilePic,
      dateOfBirth: rest.dateOfBirth,
      registrationNumber: rest.registrationNumber,
      department: rest.department,
      roles: "student",
    });

    const courses = rest.courses.split(",");

    let Courses = [];

    courses.map((item) => {
      Courses.push({
        courseName: item,
        student: docs._id,
      });
    });
    var dep_courses = await coursesModel.insertMany(Courses);
    dep_courses.map((data) => {
      docs.courses.push(data._id);
    });

    var { password, ...rest } = await docs.save();

    return res.json({
      data: rest,
      status: 2000,
      token: generateToken(docs._id, docs.roles),
      msg: "You've successfully enrolled",
    });
  } catch (error) {
    console.log(error);
    if (error) {
      return res
        .status(405)
        .send({ msg: error /* handleErrorMsg(error) */, status: 4000 });
    }
  }
};
const loginController = async (req, res) => {
  const { password } = req.body;
  try {
    const user = await usersModel
      .findOne({
        registrationNumber: req.body.registrationNumber,
      })
      .lean();
      
    const decryptedPassword = comparePasswords(password, user.password);
   

    if (decryptedPassword) {
      const { password, ...rest } = user;
      return res.json({
        data: rest,
        msg: "successfully logged in",
        token: generateToken(rest._id, rest.roles),
        status: 2000,
      });
    }
  } catch (error) {
    return res.json({ msg: "incorrect password or registration number", status: 4000 });
  }
};
module.exports = { signUpController, loginController };
