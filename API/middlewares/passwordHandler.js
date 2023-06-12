
const CryptoJS = require("crypto-js");
require("dotenv").config();
const salt = "I am a nigga";

exports.hashPassword = (password) => {
  const hashedPassword = CryptoJS.SHA256(password).toString();

  return hashedPassword;
};

// Verify the password
exports.comparePasswords = (password, hashedPassword) => {
  const inputHashedPassword = CryptoJS.SHA256(password).toString();
  return inputHashedPassword === hashedPassword;
};
