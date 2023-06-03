const Tag = require("../models/tag");

const appController = {
  async index(req, res) {
    try {
      await Tag.sync({ force: true });

      let tag = {
        name: "one more new tag",
      };

      // * On créé un tag
      await Tag.create(tag);

      // *  On sélectionne le tag avec un where sql
      tag = await Tag.findOne({
        where: { name: "one more new tag" },
      });

      console.log(tag.dataValues);

      return res.render("index");
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      return res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
