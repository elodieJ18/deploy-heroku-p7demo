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


module.exports.getOneComment = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then((sauces) => res.status(200).json(sauces))
    .catch((error) => res.status(404).json({ error }));
};

//modifier une sauce
//Récupère une sauce unique par l'id
exports.modifyComment = (req, res, next) => {
  const saucesObject = req.file
    ? {
        ...JSON.parse(req.body.sauce),
        imageUrl: `${req.protocol}://${req.get("host")}/images/${
          req.file.filename
        }`,
      }
    : { ...req.body };
  Sauces.updateOne(
    { _id: req.params.id },
    { ...saucesObject, _id: req.params.id }
  )
    .then(() => res.status(200).json({ message: "Objet modifié !" }))
    .catch((error) => res.status(400).json({ error }));
};

//supprimer
exports.deleteComment = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then((sauces) => {
      const filename = sauces.imageUrl.split("/images/")[1];
      fs.unlink(`images/${filename}`, () => {
        Sauces.deleteOne({ _id: req.params.id })
          .then(() => res.status(200).json({ message: "Objet supprimé !" }))
          .catch((error) => res.status(400).json({ error }));
      });
    })
    .catch((error) => res.status(500).json({ error }));
};

//Option de likes
exports.likeComment = (req, res, next) => {
  switch (req.body.like) {
    //Premier cas userlike and userdislike/
    case 0:
      // on appelle l'id du post
      //case 0 ---> like 1 = 1
      //case 0 ---> dislike -1 = 1
      Sauces.findOne({ _id: req.params.id })
        .then((sauces) => {
          //On compare les user_id
          if (sauces.usersLiked.find((user) => user === req.body.userId)) {
            Sauces.updateOne(
              { _id: req.params.id },
              //met a jour la requete dans les data pour un like
              {
                $inc: { likes: -1 },
                $pull: { usersLiked: req.body.userId },
                _id: req.params.id,
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
          if (sauces.usersDisliked.find((user) => user === req.body.userId)) {
            Sauces.updateOne(
              { _id: req.params.id },
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
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { likes: 1 },
          $push: { usersLiked: req.body.userId },
          _id: req.params.id,
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
      Sauces.updateOne(
        { _id: req.params.id },
        {
          $inc: { dislikes: 1 },
          $push: { usersDisliked: req.body.userId },
          _id: req.params.id,
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


