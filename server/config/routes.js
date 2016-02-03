var mongoose = require('mongoose');
var Gig = mongoose.model('Gig');
var gigs = require('../controllers/gigs.js');
var User = mongoose.model('User');
var users = require('../controllers/users.js');
var Booker = mongoose.model('Booker');
var bookers = require('../controllers/bookers.js');

module.exports = function(app){

	app.get('/users', function (req, res){
		users.all(req, res);
	});
	app.get('/bookers', function (req, res){
		bookers.all(req, res);
	});
	app.get('/gigs', function (req, res){
		gigs.all(req, res);
	});
	app.post('/adduser', function (req, res){
		users.create(req, res);
	});
	// app.post('/addbooker', function (req, res){
	// 	bookers.create(req, res);
	// });
	app.post('/addgig', function (req, res){
		gigs.create(req, res);
	});
	app.post('/login', function (req, res) {
      	users.login(req, res);
    });
    app.post('/booker_login', function (req, res) {
      	bookers.login(req, res);
    });
    app.post('/deleteGig', function (req, res) {
    	gigs.destroy(req, res);
    });
}