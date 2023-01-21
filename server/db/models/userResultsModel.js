const Sequelize = require("sequelize");
const db = require("../database");
const Result = require("./resultModel");

const userResultsModel = db.define("userResults", {
  resultId: {
    type: Sequelize.INTEGER,
    references: {
      model: Result,
      key: "id",
    },
  },
});

module.exports = userResultsModel;
