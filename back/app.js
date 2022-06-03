const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("groupomania", "root", "root", {
  dialect: "mysql",
});

sequelize.sync({ alter: true });

const Users = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
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

/*ou --> console.log(sequelize.models.user) */
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
