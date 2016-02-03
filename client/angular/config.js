var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl: 'partials/home.html'
	})
	.when('/register',{
		templateUrl: 'partials/register.html'
	})
	.when('/musician',{
		templateUrl: 'partials/musician.html'
	})
	.when('/booker',{
		templateUrl: 'partials/booker.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});