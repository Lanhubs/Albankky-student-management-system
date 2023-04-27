const Sequelize = require("sequelize");

const sequelize = new Sequelize("LiamsDB", "root", "12345", {
  host: "localhost",
  dialect: "mysql",
  port: "3306",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  silent: true,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log("Database connected successfully"))
  .catch((err) => {
    console.log(err);
  });
sequelize.sync({ force: true, alter: true });
sequelize.query(
  "SELECT user, host FROM mysql.user WHERE user='root'",
  (err, result) => {
    if (err) console.log(err);
    if (result) console.log(result);
  }
);

module.exports = { sequelize, Sequelize };

