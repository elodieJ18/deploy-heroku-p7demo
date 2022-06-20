const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const db = require("../config/db");

exports.signup = (req, res) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        email: req.body.email,
        password: hash,
      });

      //la requête SQL pour envoyer les adonnées dans la table user
      db.query("INSERT INTO users SET ?", user, (error, results) => {
        if (error) {
          console.log(error);
          res.json({ error });
        } else {
          console.log("results");
          console.log(results);
          res.json({ message: "utilisateur enregistré" });
        }
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.login = (req, res) => {
  const email = req.body.email;

  db.query("SELECT * FROM user WHERE email = ?", email, (error, results) => {
    if (error) {
      console.log(error);
      console.log("error");
      res.json({ error });
    } else {
      console.log("result");
      console.log(results);
      res.json({ message: "email présent dans la base de donnée" });
    }
  });
};

console.log({ email: "pas d'erreur" });
