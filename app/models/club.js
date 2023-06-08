const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Club extends Model {}

Club.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
  },

  {
    sequelize: getConnexion(),
    tableName: "club",
    modelName: "Club",
  }
);

module.exports = Club;
