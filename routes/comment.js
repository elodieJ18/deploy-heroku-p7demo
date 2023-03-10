const express = require("express");
const router = express.Router();
const commentCtrl = require("../controllers/comment");
const { authJwt } = require("../middleware");
const parser = require("../middleware/multer");

//creation d'une nouvelle sauce
//router.post("/upload", [authJwt.verifyToken], multer, commentCtrl.createComment);
router.post('/upload', [authJwt.verifyToken], parser.single('image'), commentCtrl.createComment, function (req, res) {
    res.json(req.file);
});
//afficher toutes les sauces
router.get("/",[authJwt.verifyToken], commentCtrl.getallComment);
//affichage du produit dans sa propre page
router.get("/:idObject",[authJwt.verifyToken], commentCtrl.getOneComment);
//modification d'un produit
router.put("/:idObject", [authJwt.verifyToken], multer, commentCtrl.modifyComment);
//suppression d'un produit
router.delete("/:idObject", [authJwt.verifyToken], commentCtrl.deleteComment);

module.exports = router;