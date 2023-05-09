const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
require("dotenv").config();
const signUpController = async (req, res) => {
  try {
    const user = object_null_type_converter(req.body);
    console.log(user);
    const profilePic = req.file.path.replace("\\", "/");
    const pwd = await bcrypt.hash(user.password, 20);
    
    const Student = new usersModel({
      profilePic,
      ...user,
      password: pwd,
      courses: [],
    });
    var my_courses = [];
    const student_courses = user.courses.split(",");
    console.log(student_courses)
    for (let idx = 0; idx < student_courses.length; idx++) {
      const course = student_courses[idx];
      my_courses.push({
        courseName: course,
        student: Student._id,
      });

    }
    const Courses = await coursesModel.insertMany(my_courses).populate("student")
    console.log(Courses)
    if(Courses){
      Courses.forEach(item=> Student.courses.push(item.courseName))
      if (Student) {
        await Student.save();
        return res.send({
          Student,
          msg: "successfully created an account",
          token: generateToken({ _id: Student._id, role: Student.role }),
          status: 2000,
        });
      }
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
