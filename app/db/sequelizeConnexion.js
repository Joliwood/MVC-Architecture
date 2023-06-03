const Sequelize = require("sequelize");

function getConnexion() {
  const sequelize = new Sequelize(process.env.PG_URL, {
    dialect: process.env.DIALECT,
    define: {
      underscored: true,
    },
  });

  return sequelize;
}

module.exports = getConnexion;
