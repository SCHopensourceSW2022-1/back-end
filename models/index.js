//  05/24 index ���� ����. ������ �����ͺ��̽� ���� ����

const Sequelize = require('sequelize');
const Info = require('./info');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);
db.sequelize = sequelize;
db.Info = Info;

Info.init(sequelize);

module.exports = db;
