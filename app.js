const express = require("express");
//crééer un application express
const path = require("path");
const Sequelize = require("sequelize");
const cookieParser = require('cookie-parser')
const app = express();

require('dotenv').config();
console.log(process.env);

const {verifyToken, authJwt} = require('./middleware/authJwt');
//variable d'environnement

require("dotenv").config();
console.log(process.env);

//import des routes
const authRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");
const replyRoutes = require("./routes/reply");
const likesRoutes = require("./routes/likes");

//intercepter toute requête d'un contenttype.json
app.use(express.json());

const cors = require('cors');


  app.use(
              cors({
                origin: ["https://groupomaniademo.herokuapp.com/"],
                methods: ["GET", "POST", "DELETE", "PUT"],
                credentials: true,
                origin: true,
              })
            );

app.use(cookieParser());

//jwt
app.get('/jwtid', verifyToken, (req, res) => {
  res.status(200).send(res.locals.user.id.toString())
});

//Gestion de la ressource images de façon statique
app.use("/images", express.static(path.join(__dirname, "images")));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, '/front')))
// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/front'))
})

//routes
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/reply", replyRoutes);
app.use("/api/likes", likesRoutes);

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node

module.exports = app;
