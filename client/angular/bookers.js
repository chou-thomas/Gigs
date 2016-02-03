myApp.factory('bookerFactory', function($http){
	var bookers = [];
	var username;
	var email;
	var password;
	var factory = {};

	factory.getBookers = function (callback){
        $http.get('/bookers').success(function(output){
            callback(output);
        })
    }

	factory.addBooker = function(info, callback){
		$http.post('/addbooker', info).success(function(err){ 
            callback(err);
        })
    
	}
    factory.login = function(info, callback) {
      $http.post('/booker_login', info).success(function(output){
        callback(output);
      })

  }
	return factory;
});



myApp.controller('bookersController', function ($scope, bookerFactory, $location){
	$scope.bookers = bookerFactory.getBookers(function(data){
		$scope.booker = data;
		$scope.new_booker = {};
	})

	    $scope.addBooker = function (){
        // console.log($scope.new_customer);
        bookerFactory.addBooker($scope.new_booker, function(err){
        	if(err){
        		$scope.errors = err.errors;
        		console.log(err.errors);
        		$location.path('/register');
        	}else{
            $scope.err = err.msg;
            console.log($scope.err);
            bookerFactory.getBookers(function(data){
                $scope.bookers = data;
                $scope.new_booker = {};
              $location.path('/booker');
              // console.log(new_user);
            });
           }
        })
    }
      $scope.login = function() {
       var booker_login = {
        username: $scope.booker.username, 
        password: $scope.booker.password
            };
        bookerFactory.login(booker_login, function(data){
          console.log(data);
          if(data === null){
            $location.path('/home');
          }else{
            $location.path('/booker');
          }
        })
      }
    })

