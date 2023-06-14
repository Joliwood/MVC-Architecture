const { Tournament } = require("../models");

const tournamentController = {
  async index(req, res) {
    const id = req.params.id;
    try {
      const tournament = await Tournament.findByPk(id, {
        include: { all: true, nested: true },
      });

      res.render("tournament", { tournament, req });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = tournamentController;
