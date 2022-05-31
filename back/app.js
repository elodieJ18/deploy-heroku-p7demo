const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("groupomania", "root", "root", {
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful!");
  })
  .catch((err) => {
    console.log("Error connecting to databes !");
  });

console.log("another test");
