const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class Sponsor extends Model {}

Sponsor.init(
  {
    name: DataTypes.TEXT,
    description: DataTypes.TEXT,
    club_id: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: getConnexion(),
    tableName: "sponsor",
    modelName: "Sponsor",
  }
);

module.exports = Sponsor;
