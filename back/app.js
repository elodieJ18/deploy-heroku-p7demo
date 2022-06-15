const express = require("express");
//crééer un application express
const path = require("path");

//variable d'environnement

require("dotenv").config();
console.log(process.env);
//mysql importation connexio

const mysql = require("./config/db");

const app = express();
//import des routes
//const authRoutes = require("./routes/user");
/*
const saucesRoutes = require("./routes/sauces");*/

//intercepter toute requête d'un contenttype.json
app.use(express.json());

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

app.get("/users", (req, res) => res.send("test depuis app.js"));
app.get("/", (req, res) => res.send("test depuis app.js"));

//Gestion de la ressource images de façon statique
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
//app.use("/api/auth", authRoutes);
/*
app.use("/api/sauces", saucesRoutes);*/

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node
module.exports = app;
