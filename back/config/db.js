//sequelize importe
const { Sequelize } = require("sequelize");

const sequelizeConnection = new Sequelize("groupomania", "root", "root", {
  dialect: "mysql",
});

sequelizeConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully!");
  })
  .catch((err) => {
    console.log("Can't establish database connection:\n" + err);
  });

module.exports = sequelizeConnection;
