const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/users");

router.post("/signup", userCtrl.signup);
router.post("/Login", userCtrl.login);

module.exports = router;
/*const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/Login", (req, res) => {
  db.query(
    "INSERT INTO users (nom, prenom, email, password) VALUES ('LeSangtest1', 'Caroline', 'lesang6@gmail.com', 'proute');",
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

router.get("/Login", (req, res) => {
  db.query(
    "INSERT INTO users (nom, prenom, email, password) VALUES ('LeSangtest1', 'Caroline', 'lesang6@gmail.com', 'proute');",
    (err, results) => {
      console.log(err);
      res.send(results);
    }
  );
});

module.exports = router;*/
