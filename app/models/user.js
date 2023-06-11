const { Model, DataTypes } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class User extends Model {}

User.init(
  {
    firstname: DataTypes.TEXT,
    lastname: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: getConnexion(),
    tableName: "user",
    modelName: "User",
  }
);

module.exports = User;
