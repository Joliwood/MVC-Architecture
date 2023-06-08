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

Level.hasMany(Sponsor, {
  foreignKey: "level_id",
  as: "sponsors",
});

Sponsor.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});

Sponsor.hasMany(Tournament, {
  foreignKey: "sponsor_id",
  as: "tournaments",
});

Tournament.belongsTo(Sponsor, {
  foreignKey: "sponsor_id",
  as: "sponsor",
});

Sponsor.belongsTo(Tournament, {
  foreignKey: "tournament_id",
  as: "good_Tournament",
});

Game.hasMany(Sponsor, {
  foreignKey: "game_id",
  as: "sponsors",
});

Sponsor.belongsTo(Game, {
  foreignKey: "game_id",
  as: "game",
});

Game.belongsToMany(Club, {
  as: "Clubs",
  through: "Game_has_Club",
  foreignKey: "Game_id",
  otherKey: "Club_id",
});

Club.belongsToMany(Game, {
  as: "Gamezes",
  through: "Game_has_Club",
  foreignKey: "Club_id",
  otherKey: "Game_id",
});

module.exports = { Tournament, Sponsor, Game, Club, Level };
