const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsTo(models.Comment, {foreignKey: "id", as: "comment"})
      this.belongsTo(models.Reply, {foreignKey: "id", as: "reply"})
        }
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
      prenom: { type: DataTypes.STRING, allowNull: false},
      image: {  type: DataTypes.STRING, required: false, allowNull: true },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: { notNull: false, notEmpty: true, isEmail: true },
      },
      status: { type: DataTypes.STRING, allowNull: false },
      password: { type: DataTypes.STRING, allowNull: false }
    },

    { sequelize, tableName: "users", modelName: "User" }
    
  );
  return User;
};

/* defaultValue: DataTypes.UUIDV4, */
