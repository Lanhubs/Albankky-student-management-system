const models = require("../models/mongoDB_model");


const getStudentController = async (req, res) => {
  try {
    const user = req.user;
    if ((user.role.includes("student"))) {
      const docs = await models.usersModel
        .findById({_id: user._id})
        .populate("courses")
        .select("-password")
        .lean()

      return res.json({ docs, status: 2000 });
    }
  } catch (error) {
    return res.json({ error, status: 4000 });
  }
};
const editMyDetailsController=(req, res)=>{

}

module.exports = { getStudentController, editMyDetailsController};
