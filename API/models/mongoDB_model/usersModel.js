const mongoose = require("./connection");
const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is compulsory"],
    allowNull: false,
  },
  password: {
    type: String,
    required: [true, "password field is compulsory"],
    allowNull: false,
    
  },
  email: {
    type: String,
    required: [true, "email is compulsory"],
    allowNull: true,
  },
  dateOfBirth: {
    type: String,
    required: [true, "date of birth is compulsory"],
    allowNull: true,
  },
  fingerPrintId: {
    type: String,
    required: [true, "you fingerprint is required"],
  },
  profilePic: {
    type: String,
    required: [true, "profile picture of yourself is required"],
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses", required: false }],
  registrationNumber: {
    type: String,
    required: [true, "registration number is required"],
    unique: [true, "registration number already in use"],
  },
/*   verified: {
    type: Boolean,
    required: true
    default: false,
  }, */
  department:{
    type: String,
    required: [true, "department must be selected"]
  },
  roles: {
    type: [
      {
        type: String,
        enum: ["student", "admin"],
      },
    ],
   
    default: ["student"],
  },
});
module.exports = mongoose.model("students", studentSchema);
