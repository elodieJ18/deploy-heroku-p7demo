const { Reply } = require("../models");
const fs = require("fs");
const path = require('path');

//créer post reply
module.exports.createReply  = async (req, res) => {
  try {
    if (!req.body.message) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    let { id, idComment, message, date, image} = req.body;
    if (req.file) {
       image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      }
      else {
        image = null;
    }
    Reply.create({
      id, idComment, message, date, image
    }).then((reply) => res.status(201).send(reply))
  } catch (error) {
    console.log(error);
    return res.send(`Error: ${error}`);
  }
};


// 2. get all products

module.exports.getallReply = async (req, res) => {
  let reply = await Reply.findAll()
  .then((reply) => {
    res.status(200).send(reply)
  })
  .catch(err => {
    res.status(500)
    .send({ message: err.message });
  });
}


module.exports.getOneReply = async (req, res, next) => {
  let id = req.params.id;
  Reply.findByPk(id)  
  .then(reply => {
    console.log(id)
     res.json(reply)
  })
.catch((err) => console.log(err));
};



//modifier un reply
//Récupère un reply unique par l'id
module.exports.modifyReply = (req, res, next) => {
  try {
      let { message, date, image} = req.body;
  let id = req.params.id;
  if (req.file) {
     image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    }
    else {
      image = null;
  }
  Reply.update(
    {  message, date, image },
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



//supprimer
exports.deleteReply = (req, res, next) => {
  let id = req.params.id;
  try {
        Reply.destroy({ where: { id: id } })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      }
    catch {((error) => 
      res.status(500).json({ error }),
      res.status(400).json({ error: "une erreur de synthax est survenu" })
    );}
};
