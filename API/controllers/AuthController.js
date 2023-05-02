const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
require("dotenv").config();
const signUpController = async (req, res) => {
  try {
    const { password, ...rest } = object_null_type_converter(req.body);
    const profilePic = req.file.path.replace("\\", "/");
    const pwd = await bcrypt.hash(password, 20);
    const docs = new usersModel({
      profilePic,
      password: pwd,
      ...rest,
    });

    let Courses;
    const student_courses = rest.courses.split(",");
    student_courses.forEach(async (courseName) => {
      Courses = new coursesModel({
        courseName,
        studentRegNo: docs.registrationNumber,
      });
      await Courses.save();
    });

    if (docs) {
      await docs.save();
      return res.send({
        docs,
        msg: "successfully created an account",
        token: generateToken({ _id: docs._id, role: docs.role }),
        status: 2000,
      });
    }
  } catch (error) {
    if (error) {
      return res.status(405).send({ msg: error, status: 4000 });
    }
  }
};
const loginController = async (req, res) => {
  const { password, registrationNumber } = req.body;
  try {
    const user = await usersModel
      .findOne({ registrationNumber }, { password: 1 })
      .lean();
    if (user) {
      const pwd = await bcrypt.compare(password, user.password);
      if (pwd) {
        const { password, ...rest } = user;

        return res.json({
          ...rest,
          msg: "successfully logged in",
          token: generateToken({ _id: rest._id, role: rest.role }),
          status: 2000,
        });
      }
    }
  } catch (error) {
    return res.status(405).send({ msg: error, status: 4000 });
  }
};
module.exports = { signUpController, loginController };
