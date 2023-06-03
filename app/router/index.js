const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/", appController.index);

router.use((req, res, next) => {
  res.status(404).render("404");
});

module.exports = router;
