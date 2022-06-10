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
    },
    { sequelize, tableName: "post", modelName: "Post" }
  );
};
