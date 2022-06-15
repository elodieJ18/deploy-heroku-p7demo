const { Sequelize, DataTypes } = require("sequelize/types");

const { Model } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  class User extends Model {
    /*  static associate(models) {
        }*/
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  User.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      nom: { type: DataTypes.STRING, allowNull: false },
      prenom: { type: DataTypes.STRING, allowNull: false },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true, isEmail: true },
      },
      status: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, required: true },
    },
    { sequelize, tableName: "users", modelName: "User" }
  );
};
