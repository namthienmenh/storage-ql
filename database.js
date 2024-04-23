const Sequelize = require('sequelize')
var DataTypes = require("sequelize").DataTypes;

var db = {}
var pass = process.env.DB_PASSWORD
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    pass,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        define: {
            freezeTableName: true,
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        operatorsAliases: false,
        // logging: false
    });


db.sequelize = sequelize
db.Sequelize = Sequelize
db.DataTypes = DataTypes
db.dataTypes = DataTypes

module.exports = db
