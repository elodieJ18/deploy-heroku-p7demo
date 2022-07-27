const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /*  static associate(models) {
        }*/
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  Comment.init(
    { idObject: { type: DataTypes.UUID, primaryKey: true },
      id: {  type: DataTypes.STRING, required: true }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE },
      image: {  type: DataTypes.STRING, required: false, allowNull: true },
      likes: { type: DataTypes.STRING, required: false, default: 0 },
      dislikes: { type: DataTypes.STRING, required: false, default: 0 },
      usersLikes: { type: DataTypes.STRING, required: false },
      usersDislikes: { type: DataTypes.STRING, required: false },
      status: { type: DataTypes.STRING },

    },
    { sequelize, tableName: "comment", modelName: "Comment" },
    {
      timestamps: true
    },
  );
  return Comment;
};