const { Sequelize, DataTypes } = require("sequelize/types");

const { Model } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
  class Post extends Model {
    /*  static associate(models) {
        }*/
    toJSON() {
      return {
        ...this.get(),
      };
    }
  }
  Post.init(
    {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      prenom: { type: DataTypes.STRING, allowNull: false },
      nom: { type: DataTypes.STRING, allowNull: false },
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE, allowNull: false },
      imageUrl: { type: String, required: false },
      likes: { type: Number, required: false, default: 0 },
      dislikes: { type: Number, required: false, default: 0 },
      usersLiked: { type: [String], required: false },
      usersDisliked: { type: [String], required: false },
    },
    { sequelize, tableName: "post", modelName: "Post" }
  );
};
