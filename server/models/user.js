var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
var UserSchema = new mongoose.Schema({
	username: String,
	email: String,
	instrument: String,
	password: String,
	confirm_password: String
});

UserSchema.path('username').required(true, 'Username cannot be blank');

UserSchema.path('email').required(true, 'Email cannot be blank');

UserSchema.path('instrument').required(true, 'Instrument cannot be blank');

UserSchema.path('password').required(true, 'Password cannot be blank');

UserSchema.path('confirm_password').required(true, 'Confirm Password cannot be blank');

var User = mongoose.model('User', UserSchema);