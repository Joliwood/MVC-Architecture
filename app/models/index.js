const Answer = require("./answer");
const Question = require("./question");
const Quiz = require("./quiz");
const Tag = require("./tag");
const User = require("./user");
const Level = require("./level");

// Ici on va gérer les associations entre les modèles : les cardinalités version JS

// Chez Sequelize:
// 0,1 = hasOne
// 1,1 = belongsTo
// 0,n = hasMany
// n,n = belongsToMany

// Level et Question :
Level.hasMany(Question, {
  foreignKey: "level_id",
  // Au pluriel car un niveau peut être DEFINI dans plusieurs questions
  as: "questions",
});

// Question et Level :
Question.belongsTo(Level, {
  foreignKey: "level_id",
  as: "level",
});

// Question et Answer
Question.hasMany(Answer, {
  foreignKey: "question_id",
  // Au pluriel car il y existes plusieurs réponses possible à chaque question
  as: "answers",
});

// Answer et Question
Answer.belongsTo(Question, {
  foreignKey: "question_id",
  // Au singulier car c'est la réponse à une question
  as: "question",
});

// Question et Answer POUR LA BONNE REPONSE
Question.belongsTo(Answer, {
  foreignKey: "answer_id",
  as: "good_answer",
});

// Attention erreur dans le svg, dans le code, la logique y est
// Quiz et Question
Quiz.hasMany(Question, {
  foreignKey: "quiz_id",
  as: "questions",
});

Question.belongsTo(Quiz, {
  foreignKey: "quiz_id",
  as: "quiz",
});

// Quiz et User
User.hasMany(Quiz, {
  foreignKey: "user_id",
  as: "quizzes",
});

Quiz.belongsTo(User, {
  foreignKey: "user_id",
  as: "author",
});

// Quiz et Tag
Quiz.belongsToMany(Tag, {
  as: "tags",
  through: "quiz_has_tag",
  foreignKey: "quiz_id",
  otherKey: "tag_id",
});

// Ici pas logique, mais un parti pris
Tag.belongsToMany(Quiz, {
  as: "quizzes",
  through: "quiz_has_tag",
  foreignKey: "tag_id",
  otherKey: "quiz_id",
});

module.exports = { User, Answer, Question, Quiz, Tag, Level };
