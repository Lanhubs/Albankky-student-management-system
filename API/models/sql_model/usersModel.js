const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const { DataTypes } = require("sequelize");
const { sequelize, Sequelize } = require("./dbConn");
const db = sequelize;
const usersModel = db.define(
  "users",
  {
    fullName: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
      allowUndefined: false,
    },
    password: {
      type: Sequelize.STRING,
      required: true,
      allowNull: false,
    },
    dateOfBirth: {
      type: Sequelize.DATE,
      required: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.EMAIL,
      required: true,
      allowNull: false,
    },
   
    profilePic:{
        type: Sequelize.STRING,
        required: true,
    },
    role:{
        type: Sequelize.enum("student", admin),
        default: "student",
        allowNull: false
    }
   
    

  },
  {
    hooks: {
      beforeCreate: async (user) => {
        if (user) {
          const salt = await bcrypt.genSalt(11);
          user.password = await bcrypt.hash(user.password, salt);
        }
        const businessLinks = await usersModel.findOne({
          where: { businessLinks: user.businessLinks },
        });
        /* if (businessLinks.length === 0 || businessLinks.length < 1) {
          throw new Error(
            "you are required to have at least a link to any of your socials"
          );
        } */
        // if(!businessLinks.includes(1) || businessLinks.includes())
      },

      beforeUpdate: async (user) => {
        const salt = await bcrypt.genSalt(11);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);
