const { Comment } = require("../models");
const fs = require("fs");
const path = require('path');
const { userInfo } = require("os");

//créer post comment
module.exports.createComment  = async (req, res) => {
  try {
    if (!req.body.message) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    let { id, idObject, message, date, image} = req.body;
    if (req.file) {
       image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      }
      else {
        image = null;
    }
    Comment.create({
      id, idObject, message, date, image
    }).then((comment) => res.status(201).send(comment))
  } catch (error) {
    console.log(error);
    return res.send(`Error: ${error}`);
  }
};


// 2. get all products

module.exports.getallComment = async (req, res) => {
  let comment = await Comment.findAll()
  .then((comment) => {
    res.status(200).send(comment)
  })
  .catch(err => {
    res.status(500)
    .send({ message: err.message });
  });
}


module.exports.getOneComment = async (req, res, next) => {
  let idObject = req.params.idObject;
  Comment.findByPk(idObject)  
  .then(comment => {
    console.log(idObject)
     res.json(comment)
  })
.catch((err) => console.log(err));
};



//modifier une comment
//Récupère une comment unique par l'id
module.exports.modifyComment = (req, res, next) => {
  try {
      let { prenom, nom, message, date, image, status} = req.body;
  let idObject = req.params.idObject;
  if (req.file) {
     image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    }
    else {
      image = null;
  }
  Comment.update(
    { prenom, nom, message, date, image, status},
    { where: { idObject: idObject } }
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
exports.deleteComment = (req, res, next) => {
  let idObject = req.params.idObject;
  try {
        Comment.destroy({ where: { idObject: idObject } })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      }
    catch {((error) => 
      res.status(500).json({ error }),
      res.status(400).json({ error: "une erreur de synthax est survenu" })
    );}
};


//Option de likes
exports.likeComment = async  (req, res, next) => {
  let likes = parseInt(req.body.likes);
  let idObject = req.params.idObject;
  let id = req.body.id;

    //Premier cas userlike and userdislike/
      // trouver le commentaire 
    Comment.findOne({
      where: { idObject: idObject, id:id },
    }) .then(comment => {
      console.log(comment);
      console.log(comment.likes);
      comment.update( {likes: comment.likes === 1 ? 0 : 1} );
      res
       .status(201)
       .json({ message: "Ton like a été pris en compte!" });
    })  
    .catch((err) => console.log(err));
};


exports.likeComment = async  (req, res, next) => {
  let likes = parseInt(req.body.likes);
  let idObject = req.params.idObject;
  let usersLikes = parseInt(req.body.usersLikes);
  let id = req.body.id;
    //Premier cas userlike and userdislike/
      // trouver le commentaire 
    Comment.findOne({
      where: { idObject: idObject, id:id },
    }) .then(comment => {
      console.log(comment);
      console.log(comment.likes);
      comment.update( {likes: comment.likes === 1 ? 0 : 1} );
        res
        .status(201)
        .json({ message: "Ton like a été pris en compte!" });
      comment.update( {usersLikes: comment.usersLikes === 1 ? 0 : 1} );
        res.status(201)
        .json({ message: "Ton like a été pris en compte!" });
    })  
    .catch((err) => console.log(err));
};



