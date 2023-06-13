const { User } = require("../models");
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");

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
        registerState: "error",
        popupTitle: "Les mots de passe ne sont pas identiques",
      });
    }

    if (!emailValidator.validate(email)) {
      return res.render("signup", {
        error: "L'adresse mail n'est pas correcte",
        registerState: "error",
        popupTitle: "Veuillez rentrer une adresse mail valide",
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
          registerState: "error",
          popupTitle: "L'utilisateur existe déjà",
        });
      }

      // Chiffrage du mot de passe
      const saltRounds = 10;
      const salt = await bcrypt.genSalt(saltRounds);
      const encryptedPass = await bcrypt.hash(password, salt);

      await User.create({
        firstname,
        lastname,
        email,
        role: "user",
        password: encryptedPass,
      });

      res.redirect("/login?registered=true");
    } catch (error) {
      console.log(error.message);
      res.status(500).send(error.message);
    }
  },

  login(req, res) {
    const registered = req.query.registered || false;
    const registerState = registered ? "success" : "";
    const popupTitle = registered ? "Votre compte a bien été créé" : "";

    res.render("login", {
      registered,
      registerState,
      popupTitle,
    });
  },

  async createSession(req, res) {
    const { email, password } = req.body;

    if (!emailValidator.validate(email)) {
      return res.render("login", {
        error: "L'adresse mail n'est pas correcte",
        registerState: "error",
        popupTitle: "Veuillez rentrer une adresse mail valide",
      });
    }

    try {
      const existsUser = await User.findOne({
        where: { email },
        attributes: { exclude: ["created_at", "updated_at"] },
      });

      if (!existsUser) {
        return res.render("login", {
          error: "Aucun compte n'a été créé avec cette adresse mail",
        });
      }

      const ok = await bcrypt.compare(password, existsUser.password);

      if (!ok) {
        return res.render("login", {
          error: "Mot de passe erroné",
        });
      }

      req.session.userId = existsUser.id;
      req.session.name = existsUser.firstname + " " + existsUser.lastname;

      res.redirect("/");
    } catch (error) {
      console.log(error.message);
    }
  },

  destroy(req, res) {
    req.session.user = null;
    res.locals.user = null;
    req.session.userId = null;

    req.session.destroy();

    res.redirect("/");
  },
};

module.exports = authController;
