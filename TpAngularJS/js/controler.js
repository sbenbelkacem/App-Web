var meteoControllers=angular.module('meteoControllers',[]);
meteoControllers.controller('MainController',['$scope','$http', function($scope,$http){
    $scope.recherche=function(){
      $http.get(https://demo.bilelz.fr/owmap/?q='+$scope.city + &units=metric&appid=[VOTRE_API_KEY]).success(fuction(data){
      $scope.meteo=data;
      }).error(function(data){
        $scope.errorMsg= "Hum.error...please retry.";
        });
    }
  }]);
