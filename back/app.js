const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_NAME}`,
});

//intercepter toute requête d'un contenttype.json
/*app.use(express.json());*/

app.get("/", (req, res) => {
  const sqlInsert =
    "INSERT INTO users (id, name, password) VALUES ('5', 'inception', 'inception');";
  db.query(sqlInsert, (err, result) => {
    res.send("hello");
  });
});

// middlewear general qui s'applique à toute les roots
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

module.exports = app;
