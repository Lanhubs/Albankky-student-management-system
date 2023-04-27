const { authToken, decodeToken, generateToken } = require("./token");
const upload = require("./fileupload")
module.exports = {
  generateToken,
  authToken,
  decodeToken,
  upload
};
