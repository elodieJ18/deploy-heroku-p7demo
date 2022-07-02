/*const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");*/
const { User } = require("../models");

module.exports.signup = async (req, res) => {
  try {
    const user = await User.create({
      nom: "Jp",
      prenom: "remy",
      email: "remy@gmail.fr",
      password: "motdepasse",
    });
    res.status(200);
    throw Error("erreur est survenu");
  } catch (erreur) {
    console.log(erreur);
    res.status(200).json({ erreur });
  }
};

