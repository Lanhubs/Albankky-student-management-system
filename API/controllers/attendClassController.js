const { comparePasswords } = require("../middlewares/passwordHandler");
const Attendance = require("../models/mongoDB_model/attendanceModel");
const usersModel = require("../models/mongoDB_model/usersModel");
// attend class controller
exports.attendanceClassController = async (req, res) => {
  const user = req.user;
  const course = req.query.course;
  const data = req.body;
  try {
    if (user.roles.includes("student")) {
      const attendance = new Attendance({
        course: course,
        student: user._id,
        isPresent: { status: true, day: Date.now() },
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
exports.verifyStudent_id_BeforeMarkingAttendanceController = async (
  req,
  res
) => {
  const course = req.query.course;
  const { password, regNo } = req.body;

  try {
    const userDetails = await usersModel.findOne({ registrationNumber: regNo });
    const verifyPwd = comparePasswords(password, userDetails.password);

    if (verifyPwd) {
      var attendance = await Attendance.findOne({
        student: userDetails._id,
        course,
      });
      attendance.isPresent.push({
        status: true,
        day: new Date(Date.now()),
      });
      const update = await attendance.save();
      if (update) {
        res.json({
          msg: "confirmed nand attendance Marked",
          status: 2000,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(405).json({ msg: "incorrect password", status: 4000 });
  }
};
exports.fetchAttendance_for_course = async (req, res) => {
  const user = req.user;
  const course = req.query.course;
  try {
    const students_attending_course = await Attendance.find({
      course,
    })
      .populate("student")
      .lean();

    res.json({
      status: 2000,
      message: "attendance loaded",
      students: students_attending_course,
    });
  } catch (e) {
    res.json({ status: 4000, msg: `an error occurred would fix that ${e}` });
  }
};
exports.markedAttendance = async (req, res) => {
  var today = new Date(Date.now());

  const user = req.user;
  try {
    var attendance = await Attendance.findOne({
      student: user._id,
      course: req.query.course,
    });
    if (attendance.isPresent.day.includes(today.getDate())) {
      return res.json({
        status: true,
        status: 4000,
      });
    }
  } catch (e) {
    return res.json({
      msg: e.msg,
      status: 4000,
    });
  }
};
exports.auto_mark=(req, res)=>{
  const user = req.user
  try {
     
  } catch (error) {
    
  }
}
