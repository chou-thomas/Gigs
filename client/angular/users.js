myApp.factory('userFactory', function($http){
	var users = [];
	var username;
	var email;
	var instrument;
	var password;
	var factory = {};

	factory.getUsers = function (callback){
        $http.get('/users').success(function(output){
            callback(output);
        })
    }

	factory.addUser = function(info, callback){
		$http.post('/adduser', info).success(function(err){ 
          callback(err);
        })
	}
    factory.login = function(info, callback) {
      // console.log(info);
      $http.post('/login', info).success(function(output){
        callback(output);
      })
  }

	return factory;
});



myApp.controller('usersController', function ($scope, userFactory, $location){
	$scope.users = userFactory.getUsers(function(data){
		$scope.users = data;
		$scope.new_user = {};
	})

	    $scope.addUser = function (){
        // console.log($scope.new_customer);
        userFactory.addUser($scope.new_user, function(err){
        	if(err){
        		$scope.errors = err.errors;
        		console.log(err.errors);
        		$location.path('/register');
        	}else{
            $scope.err = err.msg;
            console.log($scope.err);
            userFactory.getUsers(function(data){
                $scope.users = data;
                $scope.new_user = {};
              $location.path('/musician');
              // console.log(new_user);
            });
           }
        })
    }

      $scope.login = function() {
       var login_repack = {
        username: $scope.user.username, 
        password: $scope.user.password
            };
        userFactory.login(login_repack, function(data){
          console.log(data);
          if(data === null){
            $location.path('/home');
          }else{
            $location.path('/musician');
          }
        })
        // console.log(login_repack);
      }
    })

