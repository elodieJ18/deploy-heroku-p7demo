const { Likes } = require("../models");

module.exports.likeComment  = async (req, res) => {
    let id = req.body.id;
    let likes = req.body.likes;
    let idComment = req.body.idComment;

    const foundLikes = await Likes.findOne({
        where: { id: id, idComment: idComment },
      });
      if (!foundLikes) {
        await Likes.create({ id, likes: likes, idComment });
        res.json({ likes: true });
      } else {
        await Likes.destroy({
            where: { id: id, idComment: idComment},
        });
        res.json({ likes: false});
      }
     
  };

  
module.exports.getallLike = async (req, res) => {
  let likes = await Likes.findAll()
  .then((likes) => {
    res.status(200).send(likes)
  })
  .catch(err => {
    res.status(500)
    .send({ message: err.message });
  });
}


