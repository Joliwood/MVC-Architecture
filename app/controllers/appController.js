const { Answer, Question, Quiz, Tag, Level } = require("../models");

const appController = {
  async index(req, res) {
    try {
      return res.render("index");
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      return res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
