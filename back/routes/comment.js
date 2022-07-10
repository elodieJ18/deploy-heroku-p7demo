const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const { authJwt } = require("../middleware");
const  multer  = require("../middleware/multer-config");

//creation d'une nouvelle sauce
router.post("/upload", [authJwt.verifyToken], multer, commentCtrl.createComment);
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