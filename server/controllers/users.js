var mongoose = require('mongoose');
var User = mongoose.model('User');
   // bcrypt    = require("bcryptjs"),
   //  _         = require('lodash'),
   //  jwt       = require('jsonwebtoken');
module.exports = (function(){
	return{

	all: function(req, res){
		User.find({}, function(err,users){
			if(err){
				console.log('Error in All method of customers.js controller');
			} else{
				res.json(users);
				// console.log(users);
			}
		})
	},

	create: function(req, res){
		var user = new User(
			{username: req.body.username, 
			 email: req.body.email,
			 instrument: req.body.instrument,
			 password: req.body.password,
			 confirm_password: req.body.confirm_password});
			if(req.body.password != req.body.confirm_password){
				// add user.find to validate
      	res.status(400).send("Password and password confirmation don't match.");}
      	User.find({username: req.body.username}, function (err, users){
    	if(err){
    	} else if(users[0]){
    		res.json({'msg': 'Name already exists'});
    	}
    	else{		
    		user.save(function(err){
				if(err){
					console.log(err)
					res.json(err);
				} else{
					res.json();
				}
			})
		  }
		})
	},
	
	login: function(req, res){
		User.findOne({
			username: req.body.username, 
			password: req.body.password
					}, 
			function (err, users){
			if(err){
				console.log(err);
				console.log('\nError logging in!');
			} else {
				res.json(users);
			}

		})
	}
  
  }
})();
