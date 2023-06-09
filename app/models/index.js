const Tournament = require("./tournament");
const Sponsor = require("./sponsor");
const Sport = require("./sport");
const Club = require("./club");
const Level = require("./level");

// Sequelize:
// 0,1 = hasOne
// 1,1 = belongsTo
// 0,n = hasMany
// n,n = belongsToMany

Level.hasMany(Club, {
  foreignKey: "club_id",
  as: "club",
});

Club.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});

// Sponsor.hasMany(Club, {
//   foreignKey: "club_id",
//   as: "club",
// });

// Ici dans le MCD on est en 0,N MAIS on passe par un tableau d'association donc on prendra belongsToMany
Club.belongsToMany(Sponsor, {
  foreignKey: "club_id",
  as: "sponsor",
  through: "club_has_sponsor",
  otherKey: "sponsor_id",
});

// Club.hasMany(Tournament, {
//   foreignKey: "tournament_id",
//   as: "tournament",
// });

// Tournament.belongsToMany(Club, {
//   as: "club",
//   through: "tournament_has_club",
//   foreignKey: "tournament_id",
//   otherKey: "club_id",
// });

// Tournament.belongsTo(Sport, {
//   foreignKey: "sport_id",
//   as: "sport",
// });

// Sport.hasMany(Tournament, {
//   foreignKey: "tournament_id",
//   as: "tournament",
// });

module.exports = { Tournament, Sponsor, Sport, Club, Level };
