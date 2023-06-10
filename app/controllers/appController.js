const { Club, Level, Sponsor, Sport, Tournament } = require("../models");

const appController = {
  async index(req, res) {
    try {
      const levels = await Level.findAll();
      const clubs = await Club.findAll({
        include: { all: true, nested: true },
      });
      const sponsors = await Sponsor.findAll();
      const sports = await Sport.findAll();
      const tournaments = await Tournament.findAll({
        include: { all: true, nested: true },
      });

      res.render("index", { levels, sponsors, clubs, sports, tournaments });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
