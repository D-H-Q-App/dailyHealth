const Sequelize = require("sequelize");
const db = require("../database");

const Question = db.define("question", {
  question: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Question;
