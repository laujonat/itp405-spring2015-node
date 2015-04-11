var Sequelize = require('sequelize');
var sequelize = require('./../config/sequelize');

var Dvd = sequelize.define('dvd', {
	title: {
		field: 'title', // matches to col in table
		type: Sequelize.STRING
	}, 

	award: {
		type: Sequelize.STRING,
		field: 'award'
	}
}, {
		timestamps: false
});

module.exports = Dvd;