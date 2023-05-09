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
    required: true,
  },

  profilePic: {
    type: String,
    required: true,
  },
  courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "courses" }],
  registrationNumber: {
    type: String,
    unique: [true, "registration number already in use"],
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
