const { Comment } = require("../models");
const fs = require("fs");
const path = require('path');

//créer post comment
module.exports.createComment  = async (req, res) => {
  try {
    if (!req.body.message) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    let { id, message, date, image} = req.body;
    if (req.file) {
       image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
      }
      else {
        image = null;
    }
    Comment.create({
      id, message, date, image
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
  let id = req.params.id;
  Comment.findByPk(id)  
  .then(comment => {
    console.log(id)
     res.json(comment)
  })
.catch((err) => console.log(err));
};



//modifier une comment
//Récupère une comment unique par l'id
module.exports.modifyComment = (req, res, next) => {
  try {
      let { prenom, nom, message, date, image, status} = req.body;
  let id = req.params.id;
  if (req.file) {
     image = `${req.protocol}://${req.get("host")}/images/${req.file.filename}`
    }
    else {
      image = null;
  }
  Comment.update(
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



//supprimer
exports.deleteComment = (req, res, next) => {
  let id = req.params.id;
  try {
        Comment.destroy({ where: { id: id } })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
      }
    catch {((error) => 
      res.status(500).json({ error }),
      res.status(400).json({ error: "une erreur de synthax est survenu" })
    );}
};


//Option de likes
exports.likeComment = (req, res, next) => {
  let like = req.params.like;
  let id = req.params.id;
  switch (like) {
    //Premier cas userlike and userdislike/
    case 0:
      // on appelle l'id du post
      //case 0 ---> like 1 = 1
      //case 0 ---> dislike -1 = 1
      Comment.findOne({ where: { id: id } })
        .then((comment) => {
          //On compare les user_id
          if (comment.usersLikes.find((user) => user === req.body.id)) {
            Comment.updateOne(
              { id: req.params.id },
              //met a jour la requete dans les data pour un like
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.id },
                id: req.params.id,
              }
            )
              .then(() => {
                res
                  .status(201)
                  .json({ message: "Ton avis a été pris en compte!" });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });
          }
          //même methode pour dislike
          if (comment.usersDisliked.find((user) => user === req.body.id)) {
            Comment.updateOne(
              { id: req.params.id },
              {
                $inc: { dislikes: -1 },
                $pull: { usersDisliked: req.body.userId },
                _id: req.params.id,
              }
            )
              .then(() => {
                res.status(201).json({
                  message: "Ton dislike interne a été pris en compte!",
                });
              })
              .catch((error) => {
                res.status(400).json({ error: error });
              });
          }
        })
        .catch((error) => {
          res.status(404).json({ error: error });
        });
      break;

    //deuxième cas like non user sur post et si c'est le même user
    //case 1 ---> dislike 1 = 1
    case 1:
      // on appelle l'id du post
      Comment.updateOne(
        { id: req.params.id },
        {
          $inc: { likes: 1 },
          $push: { usersLiked: req.body.id },
          id: req.params.id,
        }
      )
        .then(() => {
          res.status(201).json({ message: "Ton like a été pris en compte!" });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
      break;
    //deuxième cas dislike non user sur post et si c'est le même user
    //case -1 ---> dislike 1 = 0
    case -1:
      Comment.updateOne(
        { id: req.params.id },
        {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: req.body.id },
          id: req.params.id,
        }
      )
        .then(() => {
          res
            .status(201)
            .json({ message: "Ton dislike a été pris en compte!" });
        })
        .catch((error) => {
          res.status(400).json({ error: error });
        });
      break;
    default:
      console.error("not today : mauvaise requête");
  }
};



