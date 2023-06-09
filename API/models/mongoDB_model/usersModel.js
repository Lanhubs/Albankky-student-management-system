const { Schema, Mongoose } = require("mongoose");
const mongoose = require("./connection");
const studentSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is compulsory"],
    allowNull: false,
  },
  username: {
    required: [false, "username is required"],
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

  profilePic: {
    type: String,
    required: [true, "your picture is required"],
    maxSize: 1000 * 1024 * 50,
    maxPayloadSize: 1000 * 1024 * 50,
  },
  level: {
    type: String,
    required: [true, "your level is required"],
  },
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "courses",
      required: [true, "courses must be selected"],
    },
  ],
  registrationNumber: {
    type: String,
    uppercase: true,
    required: [true, "registration number is required"],
    unique: [true, "registration number already in use"],
  },

  department: {
    type: String,
    required: [true, "department must be selected"],
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
studentSchema.pre("save", (next) => {
  if (this.method === "GET") {
    if (this.roles === "admin") {
      this.courses.required = false;
      this.department.required = false;
      this.dateOfBirth.required = false;
    }
    this.username.required === false;
  }
  next();
});
module.exports = mongoose.model("students", studentSchema);
