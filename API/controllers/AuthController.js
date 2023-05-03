const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
require("dotenv").config();
const signUpController = async (req, res) => {
  try {
    const user = object_null_type_converter(req.body);
    console.log(user)
    const profilePic = req.file.path.replace("\\", "/");
    const pwd = await bcrypt.hash(user.password, 20);
    const Student = new usersModel({
      profilePic,
      
      password: pwd,
      courses: [],
    });
    console.log(Student)

    const student_courses = user.courses.split(",");
    for (let idx = 0; idx < student_courses.length; idx++) {
      const course = student_courses[idx];
      const courses = new coursesModel({
        courseName: course,
        student: Student._id,
      });
      await courses.save();
      console.log(course);
      Student.courses.push(course._id);
    }

    if (Student) {
      await Student.save();
      return res.send({
        Student,
        msg: "successfully created an account",
        token: generateToken({ _id: Student._id, role: Student.role }),
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
