const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Game extends Model {}

Game.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
  },
  {
    sequelize: getConnexion(),
    tableName: "game",
    modelName: "Game",
  }
);

module.exports = Game;
