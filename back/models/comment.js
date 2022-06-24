/*const { Model } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  class Comment extends Model {
    /*  static associate(models) {
        }*/
/* toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  Comment.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      nom: { type: DataTypes.STRING, allowNull: false },
      prenom: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      imageUrl: { type: String, required: false },
      likes: { type: Number, required: false, default: 0 },
      dislikes: { type: Number, required: false, default: 0 },
      usersLiked: { type: [String], required: false },
      usersDisliked: { type: [String], required: false },
    },
    { Sequelize, tableName: "comment", modelName: "Comment" }
  );
};*/
