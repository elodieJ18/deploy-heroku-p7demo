const express = require("express");
//crééer un application express
const path = require("path");
const Sequelize = require("sequelize");
const cookieParser = require('cookie-parser')
const app = express();

const {verifyToken, authJwt} = require('./middleware/authJwt');
//variable d'environnement

require("dotenv").config();
console.log(process.env);

//import des routes
const authRoutes = require("./routes/user");
const commentRoutes = require("./routes/comment");

//intercepter toute requête d'un contenttype.json
app.use(express.json());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors({credentials: true,
             origin: 'http://localhost:3000', 
             allowedHeaders: ["sessionId", "Content-Type"],
             exposedHeaders: ["sessionId"],
             methods: "GET, HEAD, PUT, PATCH, POST, DELETE",
             preflightContinue: true,
            }));

app.use(cookieParser());

//jwt
app.get('/jwtid', verifyToken, (req, res) => {
  res.status(200).send(res.locals.user.id.toString())
});

//Gestion de la ressource images de façon statique
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
app.use("/api/auth", authRoutes);
app.use("/api/comment", commentRoutes);

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node

module.exports = app;
