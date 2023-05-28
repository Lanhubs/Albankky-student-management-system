const mongoose = require("./connection");
const attendanceSchema = mongoose.Schema({
  course: {
    type: String,
  },
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "students",
  },
  timer: {
    type: String,
    interval: "10m",
    repeat: true,
  },
  isPresent: [
    {
      status: {
        type: Boolean,
        default: false,
      },
      day: mongoose.Schema.Types.Date,
    },
  ],
});
const Attendance = mongoose.model("attendance", attendanceSchema);
/* Attendance.setTimer = () => {
  Attendance.present[0].status = false;
  Attendance.present[0].save();
}; */
module.exports = Attendance;
