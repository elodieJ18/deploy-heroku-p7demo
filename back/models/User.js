const { Model } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
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
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
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
    { Sequelize, tableName: "users", modelName: "User" }
  );
  return User;
};
