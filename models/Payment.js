const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Payment = db.define('payment', {
    deliveryMethod: {
        type:Sequelize.STRING
    },
    paymentMethod: {
        type: Sequelize.STRING
    },
    address: {
        type: Sequelize.STRING
    },
    paymentstatus: {
        type: Sequelize.STRING
    },
});
module.exports = Payment;