const usersModel = require("../models/mongoDB_model/usersModel");
const coursesModel = require("../models/mongoDB_model/coursesModel");
const bcrypt = require("bcryptjs");
const { generateToken } = require("../middlewares");
const { object_null_type_converter } = require("../middlewares/token");
require("dotenv").config();
const signUpController = (req, res) => {
  try {
    const user = object_null_type_converter(req.body);
    const profilePic = req.file.path.replace("\\", "/");
    bcrypt.hash(user.password, 20, (err, hashedPwd) => {
      if (err) {
        throw Error(err);
      }
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
      let dep_courses;

      courses.map((item) => {
        Courses.push({
          courseName: item,
          student: docs._id,
        });

/*         dep_courses = new coursesModel({
          courseName: item,
          student: docs._id,
        });
        docs.courses.push(dep_courses._id);
        await dep_courses.save(); */
      });
      console.log(courses)
      if (dep_courses) {
        docs
          .save()
          .then((docs) => {
            res.send({
              data: docs,
              status: 2000,
              msg: "You've successfully enrolled",
            });
          })
          .catch((err) => {
            throw Error(err);
          })
          .catch((err) => {
            if (err) {
              throw Error(err);
            }
          });
      }
    });
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
