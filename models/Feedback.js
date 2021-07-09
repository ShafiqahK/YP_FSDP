const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Feedback = db.define('feedback', {
    rating: {
        type: Sequelize.STRING
    },
    comment: {
        type: Sequelize.STRING
    },
    status: {
        type:  Sequelize.STRING
    },
});
module.exports = Feedback;