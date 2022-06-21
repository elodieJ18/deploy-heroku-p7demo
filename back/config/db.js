//importer mysql
const mysql = require("mysql");
//les paramètre de connexion BDD
const db = mysql.createConnection({
  host: "localhost",
  database: "groupomania",
  user: "root",
  password: "root",
});

db.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
  } else {
    console.log("connecté à la base de donnée - groupomania");
    console.log(`connected as id ${db.threadId} `);
  }
});

module.exports = db;
