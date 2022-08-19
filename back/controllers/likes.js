const { Likes } = require("../models");

module.exports.likeComment  = async (req, res) => {
    try {
      if (!req.body.likes) {
        res.status(400).send({
          message: "No Likes"
        });
      }
      let { id, idComment, likes, idObject} = req.body;
      Likes.create({
        id, idObject, idComment, likes
      }).then((comment) => res.status(201).send(comment))
    } catch (error) {
      console.log(error);
      return res.send(`Error: ${error}`);
    }
  };

