const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
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


module.exports.login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
   
      const passwordIsValid =   bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }
      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });
      res.status(200).send({
        id: user.id,
        nom: user.nom,
        email: user.email,
        password: user.password,
        accessToken: token
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


module.exports.profil  = async (req, res) => {
  try {
    let { status, image} = req.body;
    image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    Comment.create({
      status, image
    }).then((comment) => res.status(201).send(comment))
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};


