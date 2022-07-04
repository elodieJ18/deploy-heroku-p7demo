const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");



module.exports.signup = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({
        status: false,
        message: 'une erreur dans create est survenu'
    });
} else {
  let { nom, prenom, email, password, status} = req.body;
  const salt = await bcrypt.genSalt(10);
  password = await bcrypt.hash(password, salt)
    const user = await User.create({
      nom, prenom, email,  password, status
    })
    .then((user) => res.status(201).send(user)).catch((error) => {
      console.log(error);
      res.status(400).send(error);
  });
  }
};

/*
module.exports.login = async (req, res) => {
 const { email, password} = req.body
const user = await User.findOne ({
  where: {
    email: req.body.email
  }
})
 if (!email || !password){
  return res.status(400).json({ message: 'mauvais email ou password'})
 }
};*/


