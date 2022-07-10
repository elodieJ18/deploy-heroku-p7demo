const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const { authJwt } = require("../middleware");
const { multerConfig } = require("../middleware");
const path = require('path')


const multer = require("multer");

var storage = multer.diskStorage({
  destination: './src/image/',
  filename: (req, file, cb) => {
    return cb(null, `${file.filename}_${Date.now()}${path.extname(file.originalname)}`);
  },
});

var uploadFile = multer({
   storage: storage,
   });
//creation d'une nouvelle sauce
router.post("/upload", [authJwt.verifyToken], uploadFile.single('image'), commentCtrl.createComment);
//afficher toutes les sauces
router.get("/",[authJwt.verifyToken], commentCtrl.getallComment);
//modification d'un produit
/*router.put("/:id", auth, multer, commentCtrl.modifyComment);
//affichage du produit dans sa propre page
router.get("/:id", auth, commentCtrl.getOneSauces);
//suppression d'un produit
router.delete("/:id", auth, commentCtrl.deleteComment);

//like des sauces (pas encore créer)
router.post("/:id/like", auth, commentCtrl.likeComment);
*/
module.exports = router;