const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
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
  Comment.init(
    { idObject: { type: DataTypes.UUID, primaryKey: true },
      id: {  type: DataTypes.INTEGER, required: true }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE },
      image: {  type: DataTypes.STRING, required: false, allowNull: true },
      likes: { type: DataTypes.ARRAY(DataTypes.STRING), required: false, default: 0 },
      usersLikes: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
    },
    { sequelize, tableName: "comment", modelName: "Comment" },
    {
      timestamps: true
    },
  );
  return Comment;
};