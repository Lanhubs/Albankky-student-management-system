const models = require("../models/mongoDB_model");
require("dotenv").config();

const getStudentsController = async (req, res) => {
  try {
    const user = req.user;
    if ((user.role.includes("admin"))) {
      const docs = await models.usersModel
        .find()
        .populate("courses")
        .select("-password")
        .lean();

      return res.json({ ...docs, status: 2000 });
    }
  } catch (error) {
    return res.json({ error, status: 4000 });
  }
};
const removeStudentController = async (req,res)=>{
  const query = req.query.student
  try {
    
    if ((user.role.includes("admin"))) {
  
      const docs = await models.usersModel.findByIdAndDelete({_id: student}).populate("courses")
      if(docs){
        res.send({msg: "successfully removed student", status: 2000})
  
      }}
  } catch (error) {
    if(error){
      res.status(405).send({msg: error, status: 4000})
    }
  }

}
const editStudentDetailsController = async (req, res)=>{
  const query = req.query.student
  try {
    
    if ((user.role.includes("admin"))) {
  
      const docs = await models.usersModel.findByIdAndUpdate({_id: student}).populate("courses")
      if(docs){
        res.send({msg: "successfully removed student", status: 2000})
  
      }}
    }catch(error){
      if(error){
        res.status(405).send({msg: error, status: 4000})
      }
    }
}

module.exports = { getStudentsController, removeStudentController, editStudentDetailsController };
