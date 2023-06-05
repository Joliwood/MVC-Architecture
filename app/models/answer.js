const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Answer extends Model {}

Answer.init(
  {
    description: DataTypes.TEXT,
    question_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "answer",
    modelName: "Answer",
  }
);

module.exports = Answer;
