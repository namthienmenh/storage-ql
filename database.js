const Sequelize = require('sequelize')
var db = {}
var pass = process.env.DB_PASSWORD
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
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

let models = [
    require('./models/user.js'),
    require('./models/hero.js'),
    require('./models/artifact.js'),
    require('./models/box.js'),
    require('./models/hotel.js'),
    require('./models/house.js'),
    require('./models/market_activity_log.js'),
    require('./models/nft_sold_history.js'),
    require('./models/nft_sold_statistic.js'),
    require('./models/hero_status.js'),
    require('./models/assert_ingame_log.js'),
    require('./models/nft_upgrade_history.js'),
    require('./models/hero_artifact.js'),
    require('./models/item.js'),
    require('./models/config_market.js'),
    require('./models/bomb_ingame_seq.js'),
    require('./models/hero_ingame_seq.js'),
    require('./models/contract_events.js'),
]

models.forEach(model => {
    const seqModel = model(sequelize, Sequelize)
    db[seqModel.name] = seqModel
})

// Apply associations
Object.keys(db).forEach(key => {
    if ('associate' in db[key]) {
        db[key].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
