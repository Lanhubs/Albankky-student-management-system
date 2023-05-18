const { Attendance } = require("../models/mongoDB_model/attendanceModel");
const usersModel = require("../models/mongoDB_model/usersModel");
// attend class controller
exports.attendanceClassController = async (req, res) => {
  const user = req.user;
  const course = req.query.course;
  const data =req.body
  try {
    if (user.roles.includes("student")) {
      const attendance = new Attendance({
        course: course,
        student: user._id,
        present: true,
      });

      if (attendance.present) {
        await attendance.save();
        res.json({
          msg: "attendance marked",
          status: 2000,
        });
      }
    }
  } catch (error) {
    res.json({ msg: error, status: 4000 });
  }
};
// verify finger print controller
exports.verifyFingerPrintBeforeMarkingAttendanceController = async (
  req,
  res
) => {
  const user = req.user;
  const fingerPrintId = req.query.fingerprint_id;
  try {
    const userDetails = await usersModel.findOne({ where: { _id: user._id } });
    if (userDetails.fingerPrintId === fingerPrintId) {
      res.json({
        msg: "fingerprint confirmed",
        status: 2000,
      });
    }
  } catch (error) {
    console.log(error)
    res.status(405).json({ msg: "invalid fingerprint", status: 4000 });
  }
};
