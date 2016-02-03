var mongoose = require('mongoose');
var Gig = mongoose.model('Gig');
module.exports = {

	all: function(req, res){
		Gig.find({}, function(err,gigs){
			console.log("hello World");
			if(err){
				console.log('Error in All method of gig.js controller');
			} else{
				console.log("hi");
				res.json(gigs);
			}
		})
	},

	create: function(req, res){
		console.log("Hello");
		var gig = new Gig(
			{
			availability: req.body.availability, 
			username: req.body.username,
			message: req.body.message, 
			date: req.body.date, 
			instrument: req.body.instrument});
		console.log(gig);
		Gig.find({username: req.body.username}, function(err, gigs){
			if(err){} 
				if(gigs[1]){
				res.json({'msg': 'gig already exists'});
			} 
			else {
				gig.save(function(err){
					if(err){
						console.log('Error in Create method of gig.js controller');
					} else{
						res.json();
					}
				})
			}
		})
	},

	destroy: function(req, res){
		console.log(req.body._id);		
		Gig.remove({_id: req.body.id}, function(err){
			console.log(req.body._id);
			if(err){
				console.log('Error in Remove method of gig.js controller');
			} else{
				res.json();
			}
		})
	}
}