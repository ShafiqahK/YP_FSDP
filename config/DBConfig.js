const Sequelize = require('sequelize');
const db = require('./db');

const sequelize = new Sequelize(db.database, db.username, db.password, {
    host: db.host,
    dialect: 'mysql',
    operatorsAliases: false,

    define: {
        timestamps: false
    },
    pool: { // Database system params, don't need to know
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});


module.exports = sequelize;