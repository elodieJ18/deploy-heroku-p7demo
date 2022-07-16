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


