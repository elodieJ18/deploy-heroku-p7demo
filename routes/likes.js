const express = require("express");
const router = express.Router();
const LikesCtrl = require("../controllers/likes");
const { authJwt } = require("../middleware");
//likes
router.post("/", [authJwt.verifyToken], LikesCtrl.likeComment);
router.get("/",[authJwt.verifyToken], LikesCtrl.getallLike);

module.exports = router;