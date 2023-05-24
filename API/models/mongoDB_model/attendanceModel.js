const mongoose = require("./connection");
const attendanceSchema = {
  course:{
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  date: {
    type: Date,
    default: Date.now
  },
  present: {
    type: Boolean,
    required: true,
    default: false,
  },
};


exports.Attendance = mongoose.model("attendance", attendanceSchema);
