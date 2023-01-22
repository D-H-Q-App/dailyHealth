const db = require("./database");

const User = require("./models/userModel");
const Question = require("./models/questionModel");
const Result = require("./models/resultModel");
const userResultsModel= require("./models/userResultsModel")

Question.hasOne(Result);
Result.belongsTo(Question);



module.exports = {
  db,
    User,
    Question,
    Result,
    userResultsModel

};
