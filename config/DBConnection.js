const mySQLDB = require('./DBConfig');
const cart = require('../models/Cart');
const feedback = require('../models/Feedback');
const payment = require('../models/Payment');
const product = require('../models/Product');

// If drop is true, all existing tables are dropped and recreated
const setUpDB = (drop) => {
	mySQLDB.authenticate()
		.then(() => {
			console.log('Admin database connected');
		})
		.then(() => {
			/*
				Defines the relationship where a user has many videos.
				In this case the primary key from user will be a foreign key
				in video
				*/
			// Form.hasMany(id);
			cart.hasOne(payment); //payment has one foreign key called card_id
			cart.hasMany(product);
            mySQLDB.sync({ // Creates table if none exists
                force: drop
            }).then(() => {
                console.log('Create tables if none exists')
            }).catch(err => console.log(err))
            })
            .catch(err => console.log('Error: ' + err));
		
};

module.exports = { setUpDB };