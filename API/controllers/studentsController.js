const { handleErrorMsg } = require("../middlewares/errorHandler");
const models = require("../models/mongoDB_model");
require("dotenv").config();

const getStudentsController = async (req, res) => {
  const user = req.user;
  try {
    const doc = await models.usersModel
      .find({ roles: { $ne: "admin" } }, { password: 0 })
      .populate("courses", "-password")
      .select("-password");

     const courses = await models.coursesModel.find()
      const department = courses.reduce((acc, student) => {
        acc[student.department] = (acc[student.department] || 0) + 1;
        return acc;
      }, {});
      var departmentalGrouping = Object
        .entries(department)
        .map(([department, count]) => ({ department, count }));
        console.log(departmentalGrouping)
    return res.json({
      students: doc,
      studentsGroup: departmentalGrouping,
      status: 2000,
    });
  } catch (error) {
    console.log(error);
    return res.json({ msg: error, status: 4000 });
  }
};
const removeStudentController = async (req, res) => {
  try {
    if (user.role.includes("admin")) {
      const docs = await models.usersModel
        .findByIdAndDelete({ _id: student })
        .populate("courses");
      if (docs) {
        res.send({ msg: "successfully removed student", status: 2000 });
      }
    }
  } catch (error) {
    if (error) {
      res.status(405).send({ msg: error, status: 4000 });
    }
  }
};
const editStudentDetailsController = async (req, res) => {
  const query = req.query.student;
  try {
    if (user.role.includes("admin")) {
      const docs = await models.usersModel
        .findByIdAndUpdate({ _id: student })
        .populate("courses");
      if (docs) {
        res.send({ msg: "successfully removed student", status: 2000 });
      }
    }
  } catch (error) {
    if (error) {
      res.status(405).send({ msg: error, status: 4000 });
    }
  }
};

module.exports = {
  getStudentsController,
  removeStudentController,
  editStudentDetailsController,
};
