const express = require("express");
const router = express.Router();
const replyCtrl = require("../controllers/reply");
const { authJwt } = require("../middleware");
const upload = require("../middleware/multer");

//creation d'une nouvelle sauce
router.post("/upload", [authJwt.verifyToken], upload, replyCtrl.createReply);
//afficher toutes les sauces
router.get("/",[authJwt.verifyToken], replyCtrl.getallReply);
//affichage du produit dans sa propre page
router.get("/:idObject",[authJwt.verifyToken], replyCtrl.getOneReply);
//modification d'un produit
router.put("/:idObject", [authJwt.verifyToken], upload, replyCtrl.modifyReply);
//suppression d'un produit
router.delete("/:idObject", [authJwt.verifyToken], replyCtrl.deleteReply);


module.exports = router;