const jwt = require("jsonwebtoken");
require("dotenv").config();
// generate token
const usersModel = require("../models/mongoDB_model/usersModel");
var secret = process.env.ALBANKKY_SYS_SECRET;
const generateToken = (_id, roles) =>
  jwt.sign({ user: {_id, roles} }, secret, {
    expiresIn: "3d",
  });
//   decode token
const decodeToken = (token) => jwt.verify(token, secret);
//   authorize token
const authToken = async (req, res, next) => {
 
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
   
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = decodeToken(token);
    req.user = await usersModel.findOne({
      where: { _id: decodedToken.user.id },
    });

    next();
  } else {
    res.status(401).send("unauthorized or invalid token");
  }
};
function object_null_type_converter(obj) {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => {
      return true;
    })
  );
}
const generateRegistrationNumber = () => {};
module.exports = {
  generateToken,
  authToken,
  decodeToken,
  object_null_type_converter,
};
