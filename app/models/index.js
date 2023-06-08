const Tournament = require("./tournament");
const Sponsor = require("./sponsor");
const Game = require("./game");
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

Sponsor.hasMany(Club, {
  foreignKey: "club_id",
  as: "club",
});

Club.hasMany(Sponsor, {
  foreignKey: "sponsor_id",
  as: "sponsor",
});

Club.hasMany(Tournament, {
  foreignKey: "tournament_id",
  as: "tournament",
});

Tournament.belongsToMany(Club, {
  foreignKey: "club_id",
  as: "club",
});

Tournament.belongsTo(Game, {
  foreignKey: "game_id",
  as: "game",
});

Game.hasMany(Tournament, {
  foreignKey: "tournament_id",
  as: "tournament",
});

module.exports = { Tournament, Sponsor, Game, Club, Level };
