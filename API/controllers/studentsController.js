const models = require("../models/mongoDB_model");
require("dotenv").config();

const getStudentsController = async (req, res) => {
  try {
    const user = req.user;
    if ((user.role = "admin")) {
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
module.exports = { getStudentsController };
