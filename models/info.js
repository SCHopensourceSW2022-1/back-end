// 05/24 데이터 베이스 연결을 위해 수정. 

/*
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
     *//*
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
};*/

const Sequelize = require('sequelize');

module.exports = class Info extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            Id: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true
            },
            Name: {
                type: Sequelize.STRING(15),
                allowNull: false,
            },
            ContentsMain: {
                type: Sequelize.STRING(100),
                allowNull: true,
            },
            ContentsDetali: {
                type: Sequelize.STRING(1000),
                allowNull: true,
            },
            Category: { //center or class
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            Class: {
                type: Sequelize.STRING(30),
                allowNull: true,
            },
            Image: {
                type: Sequelize.STRING(200),
                allowNull: true,
            },
        }, {
            sequelize,
            timestamps: false,
            underscored: false,
            modelName: 'Info',
            tableName: 'Info',
            paranoid: 'false',
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
        });
    }
};

