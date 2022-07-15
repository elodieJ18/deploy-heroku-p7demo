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
    {
      id: { type: DataTypes.UUID, primaryKey: true }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      nom: { type: DataTypes.STRING },
      prenom: { type: DataTypes.STRING },
      message: { type: DataTypes.STRING, allowNull: false },
      //date: { type: DataTypes.DATE, allowNull: false },
      image: {  type: DataTypes.STRING, required: false, allowNull: true },
      likes: { type: DataTypes.STRING, required: false, default: 0 },
      dislikes: { type: DataTypes.STRING, required: false, default: 0 },
     // usersLiked: { type: DataTypes.STRING, required: false },
      //usersDisliked: { type: DataTypes.STRING, required: false },
      status: { type: DataTypes.STRING },
    },
    { sequelize, tableName: "comment", modelName: "Comment" }
  );
  return Comment;
};