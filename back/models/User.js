const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    toJSON() {
      return {
        ...this.get(),
        password: undefined,
      };
    }
  }
  User.init(
    {
      id: { type: DataTypes.UUID, primaryKey: true },
      nom: { type: DataTypes.STRING, allowNull: false },
      prenom: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true, isEmail: true },
      },
      status: { type: DataTypes.STRING },
      password: { type: DataTypes.STRING, required: true }
    },

    /*User.beforeCreate ((user, options) => {
        let 
    }),*/
    
    { sequelize, tableName: "users", modelName: "User" }
  );
  return User;
};

/* defaultValue: DataTypes.UUIDV4, */
