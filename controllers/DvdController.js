var Dvd = require('../models/Dvd');

module.exports = {
	dvds: function(req, res) {
		// console.log(req.query.title);
		Dvd.findAll({
			where: {
				title: {like: '%' + req.query.title + '%'},
				award: req.query.award
			}
		}).then(function(results){
			// javascript promises
			// handles asyncronous operations
			res.render('results', {
				dvds: results
			});
		});
	}
};