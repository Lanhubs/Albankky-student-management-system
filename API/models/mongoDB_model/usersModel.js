const mongoose = require("./connection");
const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is compulsory"],
    allowNull: true,
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
    required: true,
  },
  profilePic: {
    type: String,
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  registrationNumber: {
    type: String,
    required: true,
    unique: [true, "registration number already in use"],
  },
/*   verified: {
    type: Boolean,
    required: true
    default: false,
  }, */
  roles: {
    type: [
      {
        type: String,
        enum: ["student", "admin"],
      },
    ],
    required: false,
    default: ["student"],
  },
});
module.exports = mongoose.model("students", studentSchema);
