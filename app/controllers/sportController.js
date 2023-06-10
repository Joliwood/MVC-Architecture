const { Sport, Tournament } = require("../models");

const sportController = {
  async index(req, res) {
    try {
      const sports = await Sport.findAll();
      const tournaments = await Tournament.findAll({
        include: { all: true, nested: true },
      });

      res.render("sports", { sports, tournaments });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = sportController;
