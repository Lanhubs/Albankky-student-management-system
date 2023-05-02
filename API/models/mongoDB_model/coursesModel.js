const mongoose = require("./connection");
const coursesSchema = mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  studentRegNo: [
    { type: mongoose.Schema.Types.ObjectId, ref: "students" },
  ],

  student: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
});

module.exports = mongoose.model("courses", coursesSchema);
