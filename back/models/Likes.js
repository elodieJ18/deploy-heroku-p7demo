const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
     static associate(models) {
      this.belongsTo(models.User, {foreignKey: "id", as: "user"})
      this.belongsTo(models.Comment, {foreignKey: "id", as: "comment"})
        }
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
    Likes.init(
    { idObject: { type: DataTypes.UUID, primaryKey: true },
      idComment: {  type: DataTypes.INTEGER, allowNull: false },
      id: {  type: DataTypes.INTEGER, required: true },
      likes: { type: DataTypes.STRING, required: false, default: 0 }
    },
    { sequelize, tableName: "likes", modelName: "Likes" },
    {
      timestamps: true
    },
  );
  return Likes;
};