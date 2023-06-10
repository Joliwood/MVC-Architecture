const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const sportController = require("../controllers/sportController");
const clubController = require("../controllers/clubController");
const sponsorController = require("../controllers/sponsorController.Js");

router.get("/", appController.index);

router.get("/sports", sportController.index);

router.get("/clubs", clubController.index);

router.get("/sponsors", sponsorController.index);

router.use((req, res, next) => {
  res.status(404).render("404");
});

module.exports = router;
