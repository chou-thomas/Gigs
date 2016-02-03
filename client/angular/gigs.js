// factories
myApp.factory('gigFactory',function($http){
	var factory = {};

	factory.getGigs = function (callback){
		$http.get('/gigs').success(function(output){
			console.log(output);
				callback(output);
				console.log(output);
			})	
		}

	factory.addGig = function(info, callback) {
		$http.post('/addgig', info).success(function(output){
			if(output.msg){
				alert(output.msg);
			}
			else{
			callback();
			}
		})
	}

	factory.delete_gig = function(info, callback) {
		console.log(info);
		$http.post('/deleteGig', {'id':info}).success(function(output){
			callback(output);
		})
	}
    // most important step: return the object so it can be used by the rest of our angular code
    return factory;
});



myApp.controller('gigController', function ($scope, gigFactory, userFactory){
    //  initialize an empty array so $scope.orders maintains a consistent data type
    $scope.gigs = [];
    $scope.users =[];
    $scope.current_user = userFactory.username;
    // console.log(data);
    // run the getOrders method and set $scope data in the callback
    gigFactory.getGigs (function (data){
        $scope.gigs = data;
        console.log(data);
    })

    // userFactory.getUsers(function(data){
    //     $scope.users = data;fff
    // });

   // gigFactory.getGigs(function(data){
   //  	$scope.gigs = data;
    	// console.log(data);
   //  })

	$scope.addGig = function() {
		$scope.new_gig.date = new Date();
		// $scope.new_gig.username = $scope.current_user;
	
		gigFactory.addGig($scope.new_gig, function(){//callback
			gigFactory.getGigs(
				//callback
				function(data){
				// console.log(data);
				if(data.msg){
					$location.path('/musician');
				}
				else{
				$scope.gigs = data;
				$scope.new_gig = {};
				// $location.path('/musician');
				}
			});
		})
	}

	$scope.deleteGig = function(id) {
		console.log(id);
		gigFactory.delete_gig(id, function(data){
		gigFactory.getGigs(function (data){
		$scope.gigs = data;
	})
			console.log(data);
			$scope.gigs = data;
		})
	}

	// gigFactory.getGigs(function (data){
	// 	$scope.gigs = data;
	// })
})
