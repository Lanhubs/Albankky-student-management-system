const mongoose = require("./connection");
const coursesSchema = mongoose.Schema({
  courseName: {
    type: string,
    required: true,
  },
  studentRegNo: [
    { type: mongoose.Schema.Types.registrationNo, ref: "students" },
  ],

  student: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
});

module.exports = mongoose.model("courses", coursesSchema);
