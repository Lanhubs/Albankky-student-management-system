const usersModel = require("../models/mongoDB_model/usersModel");
const bcrypt = require("bcrypt");
const { generateToken } = require("../middlewares");
require("dotenv").config()
const signupController = async (req, res) => {
  const user = req.body;
  const profilePic = req.file.path.replace("\\", "/");
  const pwd = await bcrypt.hash(user.password, 20);
  try {
    const docs = await usersModel.create({
      profilePic,
      password: pwd,
      ...user,
    }).lean()
    if (docs) {
      res.send({
        ...docs,
        msg: "successfully created an account",
        token: generateToken(docs._id, docs.role),
        status: 2000,
      });
    }
  } catch (error) {
    if (error) {
      res.status(405).send({ msg: error, status: 4000 });
    }
  }
};
const loginController = async (req, res) => {
  const { password, registrationNumber } = req.body;
  try {
    const user = await usersModel.findOne(
      { registrationNumber },
      { password: 1 }
    ).lean()
    if (user) {
      const pwd = await bcrypt.compare(password, user.password);
      if (pwd) {
        const { password, ...rest } = user;
        res.send({
          ...rest,
          msg: "successfully logged in",
          token: generateToken(rest._id, rest.role),
          status: 2000,
        });
      }
    }
  } catch (error) {
    res.status(405).send({ msg: error, status: 4000 });
  }
};
module.exports = { signupController, loginController };
