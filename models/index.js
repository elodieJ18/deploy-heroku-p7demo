//sequelize importe
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const db = {};
const basename = path.basename(__filename);

let sequelize = new Sequelize("heroku_409e8cb9b52a614", process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: "eu-cdbr-west-03.cleardb.net",
  dialect: "mysql",
  define:{
      timestamps: false
  },
});

sequelize
  .authenticate()
  .then(() => {
   console.log("Connection has been established successfully!");
  })
  .catch((err) => {
    console.log("Can't establish database connection:\n" + err);
  });


fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;