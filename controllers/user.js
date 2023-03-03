const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");

const maxAge = 3 * 24 * 60 * 60 * 1000;


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
      var token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 86400 // 24 hours
        
      });
      const maxAge = 3*24*60*60*1000;
      res.cookie("jwt", token, {httpOnly: true, maxAge});
      res.status(201).send({
        id: user.id,
        nom: user.nom,
        email: user.email,
        password: user.password,
        accessToken: token,
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};



module.exports.logout = (req, res) => {
    res.cookie('jwt', '', {httpOnly: false, maxAge: 1 });
    res.redirect('/');
}

module.exports.userInfo = async (req, res, next) => {
  let id = req.params.id;
  User.findByPk(id)  
  .then(user => {
    console.log(id)
     res.json(user)
  })
.catch((err) => console.log(err));
};


module.exports.createprofil  = async (req, res) => {
  try {
    let { status, image} = req.body;
    image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`,
    User.create({
      status, image
    }).then((user) => res.status(201).send(user))
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};


module.exports.modifyProfil = (req, res, next) => {
  try {
      let { prenom, nom, message, date, image, status} = req.body;
  let id = req.params.id;
  if (req.file) {
     image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
  }
  User.update(
    { prenom, nom, message, date, image, status},
    { where: { id: id } }
  ) 
    .then(() => 
    res.status(200).json({ message: "Objet modifié !" }),
    )
  }
    catch{((error) => 
    res.status(500).json({ error: "une erreur est survenu" }),
    res.status(400).json({ error: "une erreur de synthax est survenu" })
    );}
};

exports.deleteUser = (req, res, next) => {
  let id = req.params.id;
  try {
        User.destroy({ where: { id: id } })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      }
    catch {((error) => 
      res.status(500).json({ error }),
      res.status(400).json({ error: "une erreur de synthax est survenu" })
    );}
};



module.exports.getAllUsers = async (req, res) => {
  let user = await User.findAll()
  .then((user) => {
    res.status(200).send(user)
  })
  .catch(err => {
    res.status(500)
    .send({ message: err.message });
  });
}



