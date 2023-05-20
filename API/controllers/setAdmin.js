const { handleErrorMsg } = require("../middlewares/errorHandler");
const { object_null_type_converter } = require("../middlewares/token");
const usersModel = require("../models/mongoDB_model/usersModel");
const bcrypt = require("bcryptjs");
exports.setAdminController = async (req, res) => {
  const body = //object_null_type_converter(req.body)
  console.log(body, req.body)
  
  try {
    const hashedPwd = await bcrypt.hash(body.password, 30);
    console.log(hashedPwd)
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
