'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  info.init({
    Id: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    ContentsMain: DataTypes.STRING,
    ContentsDetali: DataTypes.STRING,
    Image: DataTypes.STRING
  }, {
    sequelize,
    timestamps: false,
    modelName: 'info',
  });
  return info;
};