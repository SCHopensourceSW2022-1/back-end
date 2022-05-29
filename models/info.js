// 05/24 데이터 베이스 연결을 위해 수정. 

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
            category: { //center or class
                type: Sequelize.STRING(10),
                allowNull: false,
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