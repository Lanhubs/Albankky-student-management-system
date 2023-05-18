const { handleErrorMsg } = require("../middlewares/errorHandler");
const models = require("../models/mongoDB_model");
const usersModel = require("../models/mongoDB_model/usersModel");


const getStudentController = async (req, res) => {
  try {
    const user = req.user;
    if ((user.roles.includes("student"))) {
      const docs = await usersModel
        .findById({_id: user._id})
        .populate("courses")
        .select("-password")
        .lean()
     
      return res.json({data: docs, status: 2000 });
    }
  } catch (error) {
    return res.json({ msg:handleErrorMsg(error), status: 4000 });
  }
};
const editMyDetailsController= async (req, res)=>{
  try{
    const user = req.user;
    if ((user.role.includes("student"))) {
      const docs = await usersModel
        .findByIdAndUpdate({_id: user._id})
        .populate("courses")
        .select("-password")
        .lean()
      const coursesRegistered = await models.coursesModel.find({
        $in: {_id:docs.courses}
      }).lean()
      return res.json({data: {docs, ...coursesRegistered}, status: 2000 });
    }
  }catch(e){

  }
}

module.exports = { getStudentController, editMyDetailsController};
