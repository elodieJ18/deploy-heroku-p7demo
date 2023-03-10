const { Comment } = require("../models"); 
const cloudinary = require('cloudinary').v2;  
//créer post comment
module.exports.createComment  = async (req, res) => {
  try {
   const result = await cloudinary.uploader.upload(req.file.path); 
    res.json(result);
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
module.exports.deleteComment = (req, res, next) => {
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







