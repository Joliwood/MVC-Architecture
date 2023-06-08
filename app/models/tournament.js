const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Tournament extends Model {}

Tournament.init(
  {
    description: DataTypes.TEXT,
    game_id: DataTypes.INTEGER,
    // Tableau d'association pour les clubs
  },
  {
    sequelize: getConnexion(),
    tableName: "tournament",
    modelName: "Tournament",
  }
);

module.exports = Tournament;
Tournament;
