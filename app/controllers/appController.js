const { Club, Level, Sponsor, Sport, Tournament } = require("../models");

const appController = {
  async index(req, res) {
    try {
      const levels = await Level.findAll();
      // const clubs = await Club.findAll();
      const sponsors = await Sponsor.findAll();

      res.render("index", { levels, sponsors });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
