var mongoose = require('mongoose');

var GigSchema = new mongoose.Schema({
	date: Date,
	availability: String,
	username: String,
	instrument: String,
	message: String
});

var Gig = mongoose.model('Gig', GigSchema);