var meteoControllers = angular.module('meteoControllers', ['ngMessages']);

meteoControllers.controller('MainController', ['$scope', '$http',
    function($scope, $http) {
	var unit = "units=metric" ; 
	var appid ="APPID=7c44d4c0f8dcb85670b322771e9b3845" ; 
	
		$scope.recherche = function() {
			/* appel AJAX à l’API openweathermap */	   
			$http.get('http://api.openweathermap.org/data/2.5/weather?q='+$scope.city+'&'+unit + '&'+appid)
				.success(function(data) {
					/* on met dans l’objet meteo les données retournées par openweatherapp */
					$scope.meteo = data;
				}).error(function(data) {
					console.log(data) ; 
							/* en cas d’erreur */
					$scope.errorMsg =  "Hum. Error... please retry.";
				});
			$http.get('http://api.openweathermap.org/data/2.5/forecast?q='+$scope.city+'&'+unit+ '&'+appid+'&lang=fr')
				.success(function(data) {
					$scope.forecast = data;
				console.log($scope.forecast) ;
				}).error(function(data) {
					$scope.loadingMsg = "Erreur pour les données sur 5 jours...";
				});
		}
	
		$scope.gps = function() {
						getLocation() ; 
		}
	
		function getLocation() {
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(showPosition, showError);
			} else {
				$scope.errorMsg=  "Geolocation is not supported by this browser.";				
			}
		}

		function showPosition(position) {
			/* appel AJAX à l’API openweathermap */	   
			$http.get('http://api.openweathermap.org/data/2.5/weather?lat='+position.coords.latitude+'&lon='+position.coords.longitude+'&'+unit + '&'+appid)
				.success(function(data) {
				/* on met dans l’objet meteo les données retournées par openweatherapp */
					$scope.meteo = data;
				}).error(function(data) {
				/* en cas d’erreur */
					$scope.errorMsg =  "Hum. Error... please retry.";
				});
		}

		function showError(error) {
			switch(error.code) {
				case error.PERMISSION_DENIED:
					$scope.errorMsg = "User denied the request for Geolocation.";
					break;
				case error.POSITION_UNAVAILABLE:
					$scope.errorMsg = "Location information is unavailable.";
					break;
				case error.TIMEOUT:
					$scope.errorMsg = "The request to get user location timed out.";
					break;
				case error.UNKNOWN_ERROR:
					$scope.errorMsg =  "An unknown error occurred.";
					break;
			}
		}
}]);