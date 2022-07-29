const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {
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
  Reply.init(
    { idObject: { type: DataTypes.UUID, primaryKey: true }, //A universally unique identifier (UUID) , UUIDV4 Random Generation
      id: {  type: DataTypes.INTEGER, required: true },
      idComment: {  type: DataTypes.INTEGER, required: true },
      message: { type: DataTypes.STRING, allowNull: false },
      date: { type: DataTypes.DATE },
      image: {  type: DataTypes.STRING, required: false, allowNull: true }
    },
    { sequelize, tableName: "reply", modelName: "Reply" },
    {
      timestamps: true
    },
  );
  return Reply;
};