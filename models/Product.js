const Sequelize = require('sequelize');
const db = require('../config/DBConfig');

const Product = db.define('product', {
 productName: {
     type: Sequelize.STRING
 },
 brand:{ 
    type: Sequelize.STRING
},
 price: { 
     type: Sequelize.DECIMAL(6,2)
 },
 description:{ 
     type: Sequelize.STRING
 },
 
});
module.exports = Product;
