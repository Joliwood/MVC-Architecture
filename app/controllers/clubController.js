const { Club } = require("../models");

const clubController = {
  async index(req, res) {
    try {
      const clubs = await Club.findAll({
        include: { all: true, nested: true },
      });

      res.render("clubs", { clubs, req });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = clubController;
