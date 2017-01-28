meteoApp.config(['$routeProvider',
	function($routeProvider) {
	

		$routeProvider.when('/home', {
			controller : 'MainController',	templateUrl : 'home.html'
		})
	
		.otherwise({
			redirectTo : '/home'
		});
}]);