const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const { verifySignUp } = require("../middleware");

router.post("/signup", [
    verifySignUp.checkDuplicateEmail
  ], userCtrl.signup);
router.post("/login", userCtrl.login);

/*router.get('/logout', userCtrl.logout);*/

router.post("/profil", userCtrl.profil);



// user display: 'block',
/*router.get('/', userController.getAllUsers);
router.get('/:id', userController.userInfo);
router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);
/*
router.put("/:id", userCtrl.modifyUser);
router.get("/:id", userCtrl.modifyUser);
router.delete("/:id", userCtrl.deleteUser);*/

module.exports = router;
