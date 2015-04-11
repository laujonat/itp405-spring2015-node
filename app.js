var express = require('express');
var Sequelize = require('sequelize');
var ejs = require ('ejs');

var DvdController = require('./controllers/DvdController');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.render('index');
})

app.get('/dvds', DvdController.dvds);

app.listen(3000, function() {
	console.log('Listening on Localhost:3000');
});