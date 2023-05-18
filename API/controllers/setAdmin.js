const { handleErrorMsg } = require("../middlewares/errorHandler");
const usersModel = require("../models/mongoDB_model/usersModel");
const bcrypt = require("bcryptjs");
exports.setAdminController = async (req, res) => {
  const body = {
    fullName: "Abdul-Rasheed Banke",
    password: "albankky@gmail.com",
    email: "albankky@gmail.com",
    dateOfBirth: "20/12/1996",
    fingerPrintId: "1990000",
    // profilePic: ,
    // finger_Print:,
    courses: "",
    registrationNumber: "",
    roles: "admin",
  };
  try {
    // const hashedPwd = await bcrypt.hash(body.password, 30);
    // console.log(ha)
    const user = new usersModel({
      fullName: body.fullName,
      email: body.email,
      dateOfBirth: body.dateOfBirth,
      fingerPrintId: body.fingerPrintId,
      courses: "",
      registrationNumber: "",
      roles: body.roles,
      password: body.password,
    });
    if (user) {
      console.log(user);
      await user.save();

      res.send({ md: "created the admin", user });
    }
  } catch (e) {
    res.status(404).send({ msg: handleErrorMsg(e) });
    console.log(e);
  }
};
