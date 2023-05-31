const { handleErrorMsg } = require("../middlewares/errorHandler");
const { hashPassword } = require("../middlewares/passwordHandler");
const { object_null_type_converter } = require("../middlewares/token");
const usersModel = require("../models/mongoDB_model/usersModel");
const bcrypt = require("bcrypt");
exports.setAdminController = async (req, res) => {


  const hashedPwd = hashPassword("Albankky199", 20);

  try {
    const user = new usersModel({
      fullName: "Albankky ",
      email: "lanre@gmail.com",
      courses: "",
      registrationNumber: "ALB/19/ALB/20",
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
