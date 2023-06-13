const { Tournament } = require("../models");

const appController = {
  async index(req, res) {
    try {
      const tournaments = await Tournament.findAll({
        include: { all: true, nested: true, asArray: true },
      });

      res.render("index", { tournaments, req });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
