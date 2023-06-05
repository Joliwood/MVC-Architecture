const { User, Answer, Question, Quiz, Tag, Level } = require("../models");

const appController = {
  async index(req, res) {
    try {
      await Tag.sync({ force: true });

      let tags = [
        { name: "tag1" },
        { name: "tag2" },
        { name: "tag3" },
        // Add more tag objects as needed
      ];

      // * On créé un tag
      await Tag.bulkCreate(tags);

      // *  On sélectionne le tag avec un where sql
      // tag = await Tag.findOne({
      //   where: { name: "one more new tag" },
      // });

      // On sélectionne tous les tags
      const createdTags = await Tag.findAll();

      const allQuestions = await Question.findAll();

      const oneQuestionWithId3 = await Question.findByPk(3);

      return res.render("index", { oneQuestionWithId3 });
    } catch (error) {
      console.log(error.message);
      console.log(error.stacks);
      return res.status(500).send("Il y a une erreur 500");
    }
  },
};

module.exports = appController;
