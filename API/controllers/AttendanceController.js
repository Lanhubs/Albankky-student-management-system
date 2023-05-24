const { Attendance } = require("../models/mongoDB_model/attendanceModel");
exports.showAllAttendance = async (req, res) => {
  const user = req.user;
  try {
    
      const allAttendances = await Attendance.find({ roles: { $ne: "admin" } })
      console.log(allAttendances);
      res.json({
        students: allAttendances,
        status: 2000,
      });
  } catch (error) {
    res.json({
        msg: error,
        status: 4000
    })
  }
};
