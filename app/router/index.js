const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");
const sportController = require("../controllers/sportController");

router.get("/", appController.index);

router.get("/sports", sportController.index);

router.use((req, res, next) => {
  res.status(404).render("404");
});

module.exports = router;
