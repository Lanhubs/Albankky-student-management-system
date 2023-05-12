const mongoose = require("./connection");
const attendanceSchema = {
  course: { type: mongoose.Schema.Types.ObjectId, ref: "courses" },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },

  status: {
    type: Boolean,
    required: true,

    default: false,
  },
};
exports.Attendance = mongoose.model("attendance", attendanceSchema);
