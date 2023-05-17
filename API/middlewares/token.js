const jwt = require("jsonwebtoken");
require("dotenv").config();
// generate token
const usersModel = require("../models/mongoDB_model/usersModel");

const generateToken = (details) =>
  jwt.sign({ user: details }, process.env.ALBANKKY_SYS_M_TOKEN, {
    expiresIn: "3d",
  });
//   decode token
const decodeToken = (token) =>
  jwt.verify(token, process.env.ALBANKKY_SYS_M_TOKEN);
//   authorize token
const authToken = async (req, res, next) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.ALBANKKY_SYS_M_TOKEN);
    req.user = await usersModel.findOne({
      where: { _id: decodedToken.user.id },
    });
    console.log(req.user, decodeToken)
    next();
  } else {
    res.status(401).send("unautorized or invalid token");
  }
};
function object_null_type_converter(obj) {
    return Object.fromEntries(
      Object.entries(obj).filter(([k, v]) => {
        return true;
      })
    );
  }
  const generateRegistrationNumber=()=>{
    
  }
module.exports = { generateToken, authToken, decodeToken, object_null_type_converter };
