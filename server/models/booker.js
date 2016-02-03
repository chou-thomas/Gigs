var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
var BookerSchema = new mongoose.Schema({
	username: String,
	email: String,
	password: String,
	confirm_password: String
});

BookerSchema.path('username').required(true, 'Username cannot be blank');

BookerSchema.path('email').required(true, 'Email cannot be blank');

BookerSchema.path('password').required(true, 'Password cannot be blank');

BookerSchema.path('confirm_password').required(true, 'Confirm Password cannot be blank');

var Booker = mongoose.model('Booker', BookerSchema);