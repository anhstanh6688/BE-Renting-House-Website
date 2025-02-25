"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The models/index file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.House, {
        foreignKey: 'house_id',
        as: 'house',
      });
    }
  }
  Comment.init(
    {
      comment_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rater_id: DataTypes.INTEGER,
      rating: DataTypes.INTEGER,
      description: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      house_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comment",
      timestamps: false,
    }
  );
  return Comment;
};