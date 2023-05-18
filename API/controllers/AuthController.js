const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
const { handleErrorMsg } = require("../middlewares/errorHandler");
require("dotenv").config();
const signUpController = async (req, res) => {
  try {
    const user = object_null_type_converter(req.body);
    const profilePic = req.file.path.replaceAll("\\", "/");
    const hashedPwd = await bcrypt.hash(user.password, 20);
    const docs = new usersModel({
      fullName: user.fullName,
      email: user.email,
      password: hashedPwd,
      courses: [],
      fingerPrintId: user.fingerPrintId,
      profilePic,
      dateOfBirth: user.dateOfBirth,
      registrationNumber: user.registrationNumber,
      roles: "student",
    });

    const courses = user.courses.split(",");

    let Courses = [];

    await courses.map((item) => {
      Courses.push({
        courseName: item,
        student: docs._id,
      });
    });
    var dep_courses = await coursesModel.insertMany(Courses);
    dep_courses.map((data) => {
      docs.courses.push(data._id);
    });

    await docs.save();

    return res.send({
      data: docs,
      status: 2000,
      token: generateToken(docs._id, docs.roles ),
      msg: "You've successfully enrolled",
    });
  } catch (error) {
    if (error) {
      return res.status(405).send({ msg: handleErrorMsg(error), status: 4000 });
    }
  }
};
const loginController = async (req, res) => {
  const { password, registrationNumber } = req.body;
  try {
    const user = await usersModel.findOne({ registrationNumber }).lean();

    if (user) {
      const pwd = await bcrypt.compare(password, user.password);
      if (pwd) {
        const { password, ...rest } = user;

        return res.json({
          data: rest,
          msg: "successfully logged in",
          token: generateToken( rest._id, rest.roles),
          status: 2000,
        });
      }
    }
  } catch (error) {
    return res.status(405).json({ msg: handleErrorMsg(error), status: 4000 });
  }
};
module.exports = { signUpController, loginController };
