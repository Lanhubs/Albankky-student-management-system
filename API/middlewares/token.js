const jwt = require("jsonwebtoken");

const generateToken = (id, role) =>
  jwt.sign({ user: { id, role } }, process.env.ALBANKKY_SYS_M_TOKEN, {
    expiresIn: "3d",
  });
const decodeToken = (token) =>
  jwt.verify(token, process.env.ALBANKKY_SYS_M_TOKEN);
const authToken = async (req, res, next) => {
  var token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "");
    req.user = await usersModel.findOne({
      where: { id: decodedToken.user.id },
    });
    next();
  } else {
    res.status(401).send("unautorized or invalid token");
  }
};
module.exports = { generateToken, authToken, decodeToken };
