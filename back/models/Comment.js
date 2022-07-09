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
      nom: { type: DataTypes.STRING, allowNull: false },
      prenom: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      image: {  type: DataTypes.BLOB('long'), required: false,  allowNull: false },
      likes: { type: DataTypes.STRING, required: false, default: 0 },
      dislikes: { type: DataTypes.STRING, required: false, default: 0 },
      //usersLiked: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
      //usersDisliked: { type: DataTypes.ARRAY(DataTypes.STRING), required: false },
      status: { type: DataTypes.STRING },
    },
    { sequelize, tableName: "comment", modelName: "Comment" }
  );
  return Comment;
};