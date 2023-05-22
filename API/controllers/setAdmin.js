const { handleErrorMsg } = require("../middlewares/errorHandler");
const { hashPassword } = require("../middlewares/passwordHandler");
const { object_null_type_converter } = require("../middlewares/token");
const usersModel = require("../models/mongoDB_model/usersModel");
const bcrypt = require("bcrypt");
exports.setAdminController = async (req, res) => {
  const body = req.body;

  const hashedPwd = hashPassword(body.password, 20);
  console.log(hashedPwd);
  try {
    console.log(hashedPwd);
    const user = new usersModel({
      fullName: body.fullName,
      email: body.email,
      dateOfBirth: body.dateOfBirth,
      fingerPrintId: body.fingerPrintId,
      courses: "",
      registrationNumber: body.registrationNumber,
      roles: "admin",
      password: hashedPwd,
    });
    if (user) {
      await user.save();

      res.send({ md: "created the admin", user });
    }
  } catch (e) {
    res.status(404).send({ msg: handleErrorMsg(e) });
    console.log(e);
  }
};
