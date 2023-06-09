// const Tournament = require("./tournament");
const Sponsor = require("./sponsor");
// const Sport = require("./sport");
const Club = require("./club");
const Level = require("./level");

// Sequelize:
// 0,1 = hasOne
// 1,1 = belongsTo
// 0,n = hasMany
// n,n = belongsToMany

Level.hasMany(Club, {
  foreignKey: "level_id",
  as: "club",
});

Club.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});

Sponsor.belongsToMany(Club, {
  foreignKey: "club_id",
  as: "club",
  through: "club_has_sponsor",
  otherKey: "sponsor_id",
});

// Ici dans le MCD on est en 0,N MAIS on passe par un tableau d'association donc on prendra belongsToMany
Club.belongsToMany(Sponsor, {
  foreignKey: "sponsor_id",
  as: "sponsor",
  through: "club_has_sponsor",
  otherKey: "club_id",
});

// Jusqu'ici, tout va bien

// Tournament.belongsToMany(Club, {
//   foreignKey: "tournament_id",
//   as: "club",
//   through: "tournament_has_club",
//   otherKey: "club_t_id",
// });

// Club.hasMany(Tournament, {
//   foreignKey: "tournament_id",
//   as: "tournament",
// });

// Tournament.belongsTo(Sport, {
//   foreignKey: "sport_id",
//   as: "sport",
// });

// Sport.hasMany(Tournament, {
//   foreignKey: "tournament_id",
//   as: "tournament",
// });

module.exports = {
  // Tournament,
  Sponsor,
  // Sport,
  Club,
  Level,
};
