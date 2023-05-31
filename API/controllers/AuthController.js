const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const Attendance = require("../models/mongoDB_model/attendanceModel");
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
    var { password, ...rest } = req.body;
    const encryptedPwd = hashPassword(password);

    const docs = new usersModel({
      fullName: rest.fullName,
      email: rest.email,
      password: encryptedPwd,
      courses: [],
      level: rest.level,
      profilePic: rest.profilePic,
      dateOfBirth: rest.dateOfBirth,
      registrationNumber: rest.registrationNumber,
      department: rest.department,
      roles: "student",
    });
    let Courses = [];
    let attendanceStatus;
    var attendancesCourses = [];

    if (!docs.roles !== "admin") {
    }
    const courses = rest.courses.split(",");
    courses.map((item) => {
      Courses.push({
        courseName: item,
        student: docs._id,
      });

      attendancesCourses.push({
        course: item,
        student: docs._id,
        isPresent: [],
      });
    });
    await Attendance.insertMany(attendancesCourses);

    var dep_courses = await coursesModel.insertMany(Courses);
    dep_courses.map((data) => {
      docs.courses.push(data._id);
    });

    var data = await docs.save();
    var resData = data["$__"] ? data._doc : data;
    var { password, ...rest } = resData;

    return res.json({
      data: rest,
      status: 2000,
      token: generateToken(rest._id, rest.roles),
      msg: "You've successfully enrolled",
    });
  } catch (error) {
    if (error) {
      return res.json({ msg: handleErrorMsg(error), status: 4000 });
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
      .populate("courses")
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
    return res.json({
      msg: "incorrect password or registration number",
      status: 4000,
    });
  }
};
module.exports = { signUpController, loginController };
