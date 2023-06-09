const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const sportController = require("../controllers/sportController");
const clubController = require("../controllers/clubController");
const sponsorController = require("../controllers/sponsorController.js");
const authController = require("../controllers/authController");
const tournamentController = require("../controllers/tournamentController");

router.get("/", appController.index);

router.get("/sports", sportController.index);

router.get("/clubs", clubController.index);

router.get("/sponsors", sponsorController.index);

router.get("/signup", authController.register);
router.post("/signup", authController.createUser);

router.get("/login", authController.login);
router.post("/login", authController.createSession);

router.get("/tournament/:id", tournamentController.index);

router.get("/logout", authController.destroy);

router.use((req, res, next) => {
  res.status(404).render("404");
});

module.exports = router;
