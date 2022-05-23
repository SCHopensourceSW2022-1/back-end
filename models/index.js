//  05/24 index 파일 수정. 서버에 데이터베이스 연동 위함

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
