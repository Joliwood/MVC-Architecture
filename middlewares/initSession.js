const { User } = require("../app/models");
const session = require("express-session");

const inOneHour = 60 * 60 * 1000;
const initSession = session({
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false, expires: inOneHour }, // cookies expire dans 1 heure
});

async function addUsersTolocals(req, res, next) {
  const userId = req.session.userId;
  const user = await User.findByPk(userId, {
    attributes: { exclude: "password" },
  });

  req.session.user = user;
  res.locals.user = user;

  next();
}

module.exports = { initSession, addUsersTolocals };
