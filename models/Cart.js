const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Cart = db.define('cart', {
    productID: {
        type: Sequelize.STRING
    },    
    productSize: {
        type:Sequelize.STRING
    },
    productColor: {
        type: Sequelize.STRING
    },
    productPrice: {
        type: Sequelize.DECIMAL(6,2)
    },
    userID: { //FK
        type: Sequelize.STRING
    }
});
module.exports = Cart;