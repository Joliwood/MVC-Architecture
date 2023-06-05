const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Question extends Model {}

Question.init(
  {
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    anecdote: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    wiki: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Si on a qu'une seule ligne à ajouter, on peut faire avec cette syntaxe-là
    level_id: DataTypes.INTEGER,
    quiz_id: DataTypes.INTEGER,
    answer_id: DataTypes.INTEGER,
  },
  {
    sequelize: getConnexion(),
    tableName: "question",
    modelName: "Question",
  }
);

module.exports = Question;
