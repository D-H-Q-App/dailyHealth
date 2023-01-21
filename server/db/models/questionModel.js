const Sequelize = require("sequelize");
const db = require("../database");

const Question = db.define("question", {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // id: {
  //   type: Sequelize.INTEGER,
  //   autoIncrement: true,
  //   primaryKey: true,
  // },
});

module.exports = Question;
