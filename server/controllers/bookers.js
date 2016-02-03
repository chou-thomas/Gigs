var mongoose = require('mongoose');
var Booker = mongoose.model('Booker');
module.exports = (function(){
	return{


	all: function(req, res){
		Booker.find({}, function(err,bookers){
			if(err){
				console.log('Error in All method of customers.js controller');
			} else{
				res.json(bookers);
			}
		})
	},
	create: function(req, res){
// 		console.log(“hi”)
// console.log(req.body)
// console.log(“hi”)
		var booker = new Booker(
			{username: req.body.username, 
			 email: req.body.email,
			 password: req.body.password,
			 confirm_password: req.body.confirm_password});
			if(req.body.password != req.body.confirm_password){
				// add user.find to validate
      res.status(400).send("Password and password confirmation don't match.");
    }
   Booker.find({username: req.body.username}, function(err, bookers){
    	if(err){
    	} else if(bookers[0]){
    		res.json({'msg': 'Name already exists'});
    	}
    	else{		
    		booker.save(function(err){
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
		Booker.findOne({
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
