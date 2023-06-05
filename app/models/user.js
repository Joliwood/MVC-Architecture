const { Model, DataTypes, literal } = require("sequelize");
const getConnexion = require("../db/sequelizeConnexion");

class User extends Model {}

User.init(
  {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
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
