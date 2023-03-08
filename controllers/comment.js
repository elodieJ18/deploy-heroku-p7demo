const { Comment } = require("../models");
const cloudinary = require("../middleware/cloudinary");
const { image } = require("../middleware/cloudinary");


//créer post comment
module.exports.createComment  = async (req, res) => {
  try {
    if (!req.body.message) {
      return res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    console.log(req.body);
    console.log(req.file);  
   
    let { comment } = ({
      id: req.body,
      idObject: req.body, 
      message: req.body,
      date: req.body,
      image: image.secure_url,
      cloudinary_id: image.public_id,
      });
  
    if (req.file) {
       image = await cloudinary.uploader.upload(req.file.path);
      }
      else {
        image = null;
    }
    Comment.create({
      comment
    }).then((comment) => res.status(201).send(comment))
  } catch (error) {
    console.log(error);
    return res.send(`Error: ${error}`);
  }
};




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
      let { message } = req.body;
  let idObject = req.params.idObject;
 
  Comment.update(
    { message  },
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







