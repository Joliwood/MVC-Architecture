const { Sponsor } = require("../models");

const sponsorController = {
  async index(req, res) {
    try {
      const sponsors = await Sponsor.findAll();

      res.render("sponsors", { sponsors, req });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = sponsorController;
