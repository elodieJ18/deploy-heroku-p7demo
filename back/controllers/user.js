/*const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");*/
const { User } = require("../models");

module.exports.signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
        status: false,
        message: ''
    });
} else {
  const { nom, prenom, email, password, status} = req.body
    const user = await User.create({
      nom, prenom, email, password, status
    })
    .then((user) => res.status(201).send(user)).catch((error) => {
      console.log(error);
      res.status(400).send(error);
  });
  }
};


/*exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};*/

