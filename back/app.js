const express = require("express");
//crééer un application express
const path = require("path");
const Sequelize = require("sequelize");
const app = express();


//variable d'environnement

require("dotenv").config();
console.log(process.env);

//const morgan = require("morgan");

//mysql importation connexion

//app.use(morgan("dev"));
//import des routes
const authRoutes = require("./routes/user");

//intercepter toute requête d'un contenttype.json
app.use(express.json());

const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000/', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

// middlewear general qui s'applique à toute les roots qui permet de gerer les CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});


//Gestion de la ressource images de façon statique
app.use("/images", express.static(path.join(__dirname, "images")));

//routes
app.use("/api/auth", authRoutes);

// pour exporter l'application/constante pour acceder aux fichiers depuis notre server node

module.exports = app;
