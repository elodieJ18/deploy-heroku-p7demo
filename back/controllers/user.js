/*const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");*/
const { User } = require("../models");

module.exports.signup = async (req, res) => {
    const user = await User.create({
      nom: "Jp",
      prenom: "test11",
      email: "test11@gmail.fr",
      password: "motdepasse",
      status: "toz"
    });
    res.status(200);
    console.log("inscription-enregisté");
};

