const { User } = require("../models");

const authController = {
  register(req, res) {
    res.render("signup");
  },

  async createUser(req, res) {
    // req.body devrait passer par un middleware, pour valider les champs du formulaire
    const {
      firstname,
      lastname,
      email,
      password,
      confirm_password: passwordConfirm,
    } = req.body;

    // Vérification qu'on a bien rempli chaque partie du formulaire côté JS
    if (!firstname || !lastname || !email || !password || !passwordConfirm) {
      return res.render("signup", {
        error: "Veuillez remplir tous les champs du formulaire",
      });
    }

    // Véfification de la correspondance des deux mots de passe
    if (password !== passwordConfirm) {
      return res.render("signup", {
        error: "Les deux mots de passe ne sont pas identiques",
        registerState: "wrongPassword",
        popupTitle: "Les mots de passe ne sont pas identiques",
      });
    }
    try {
      const existsUser = await User.findOne({
        where: { email },
      });

      // Vérification si le compte existe déjà (par l'adresse mail)
      if (existsUser) {
        return res.render("signup", {
          error: "Un compte a déjà été enregistré avec cette adresse-mail",
          registerState: "userAlreadyExists",
          popupTitle: "L'utilisateur existe déjà",
        });
      }

      await User.create({
        firstname,
        lastname,
        email,
        // role: 'user',
        // password: encryptedPass,
        password,
      });

      // res.redirect("/login?registered=true");
      // registerState: "userCreated",
      // popupTitle: "Votre compte a bien été créé",
      res.redirect("/login?registered=true");
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },

  login(req, res) {
    let registered = false;

    if (req.query.registered) {
      registered = req.query.registered;
    }

    res.render("login", {
      registered,
      registerState: "userCreated",
      popupTitle: "Votre compte a bien été créé",
    });
  },
};

module.exports = authController;