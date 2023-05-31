const multer = require("multer");
const fs = require("fs");
const path = require("path");

/* const imgStorage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: imgStorage,
  fileFilter: (_, file, cb) => {
    const fileTypes = /jpg|jpeg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("error occurred");
  },
}); */
const imgStorage = multer.diskStorage({
  destination: "./public/images",
  filename: (req, file, cb) => {
    cb(null, /* Date.now() + path.extname( */file.originalname);
  },
});
exports.upload = multer({
  storage: imgStorage,
  /* fileFilter: (_, file, cb) => {
    const fileTypes = /jpg|jpeg|png|gif/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("error occurred");
  }, */
});
