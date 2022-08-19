const { Likes } = require("../models");

module.exports.likeComment  = async (req, res) => {
    let id = req.body.id;
    let likes = req.body.likes;
    let idComment = req.body.idComment;

    const foundLikes = await Likes.findOne({
        where: { id: id },
      });
      if (!foundLikes) {
        await Likes.create({ id, likes: likes, idComment });
        res.json({ likes: true });
      } else {
        await Likes.destroy({
            where: { id: id},
        });
        res.json({ likes: false});
      }
     
  };

