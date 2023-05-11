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
    select: false,
  },
  email: {
    type: String,
    required: [true, "email is compulsory"],
    allowNull: false,
  },
  dateOfBirth: {
    type: String,
    required: [true, "date of birth is compulsory"],
    allowNull: false,
  },
  fingerPrintId: {
    type: String,
    required: false,
  },
  profilePic: {
    type: String,
    required: false,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  registrationNumber: {
    type: String,
    required: false,
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
