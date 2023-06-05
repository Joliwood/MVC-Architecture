const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Quiz extends Model {}

Quiz.init(
  {
    description: DataTypes.TEXT,
    question_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "quiz",
    modelName: "Quiz",
  }
);

module.exports = Quiz;
