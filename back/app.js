const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("groupomania", "root", "root", {
  dialect: "mysql",
});

const Users = sequelize.define(
  "users",
  {
    Id: {
      type: Sequelize.DataTypes.INTEGER,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    age: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);

/*synchronisation de la base de donnée */

Users.sync()
  .then((data) => {
    console.log("Table and model synced successfully!");
  })
  .catch((err) => {
    console.log("Error syncing the table and model!");
  });

/*
sequelize
  .authenticate()
  .then(() => {
    console.log("connection successful!");
  })
  .catch((err) => {
    console.log("Error connecting to databes !");
  });

console.log("another test");*/
