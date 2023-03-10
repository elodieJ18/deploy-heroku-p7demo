const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const { authJwt } = require("../middleware");
const upload = require("../middleware/multer");

//creation d'une nouvelle sauce
router.post("/upload", upload.single('image'), [authJwt.verifyToken], async (req, res) => {
    try {
     const result = await cloudinary.uploader.upload(req.file.path); 
      res.json(result);
    } catch (error) {
      console.log(error);
      return res.send(`Error: ${error}`);
    }
  });
//afficher toutes les sauces
router.get("/",[authJwt.verifyToken], commentCtrl.getallComment);
//affichage du produit dans sa propre page
router.get("/:idObject",[authJwt.verifyToken], commentCtrl.getOneComment);
//modification d'un produit
router.put("/:idObject", [authJwt.verifyToken], upload.single('image'), commentCtrl.modifyComment);
//suppression d'un produit
router.delete("/:idObject", [authJwt.verifyToken], commentCtrl.deleteComment);

module.exports = router;