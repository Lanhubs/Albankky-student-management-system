const { genSaltSync } = require("bcrypt");
const CryptoJS = require("crypto-js");
require("dotenv").config();
const salt = "I am a nigga";
exports.hashPassword = (password) => {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512");
  return hash;
};

exports.comparePasswords = (password, hashedPassword) => {
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512")

  return hash === hashedPassword.hash;
};
exports.hashPassword = (password) => {
  const hashedPassword = CryptoJS.SHA256(password).toString();
  return hashedPassword;
};

// Verify the password
exports.comparePasswords = (password, hashedPassword) => {
  const inputHashedPassword = CryptoJS.SHA256(password).toString();
  return inputHashedPassword === hashedPassword;
};
exports.encryptPassword = (password) => {
  const iv = crypto.randomBytes(32); // Generate a random IV

  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from('your-secret-key', 'base64'), iv);
  let encryptedPassword = cipher.update(password, 'utf8', 'hex');
  encryptedPassword += cipher.final('hex');
  return {
    iv,
    encryptedPassword,
  };
};

exports.decryptPassword = async (encryptedPassword, iv) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from('your-secret-key'), Buffer.from(iv, 'hex'));
  let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
  decryptedPassword += decipher.final('utf8');
  return decryptedPassword;
};