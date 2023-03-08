const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");
const { verifySignUp } = require("../middleware");
const upload = require("../middleware/multer");

router.post("/signup", [
    verifySignUp.checkDuplicateEmail
  ], userCtrl.signup);
router.post("/login", userCtrl.login);

router.get('/logout', userCtrl.logout);

router.get("/", userCtrl.getAllUsers);

router.post("/profil",  upload.single('image'), userCtrl.createprofil);

router.get('/:id', userCtrl.userInfo);

router.put("/:id", upload.single('image'), userCtrl.modifyProfil);

router.delete("/:id", userCtrl.deleteUser);

// user display: 'block',
/*router.get('/', userController.getAllUsers);

router.put("/:id", userController.updateUser);
router.delete('/:id', userController.deleteUser);
*/

module.exports = router;
