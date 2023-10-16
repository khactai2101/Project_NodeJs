const Sequelize = require("sequelize");

const connectMysql = new Sequelize("Project3", "root", "12345678", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = connectMysql;
