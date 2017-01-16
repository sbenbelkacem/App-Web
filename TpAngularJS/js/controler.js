var meteoControllers=angular.module('meteoControllers',[]);
meteoControllers.controller('MainController',['$scope','$http', function($scope,$http){
    $scope.recherche=function(){
      $http.get(https://demo.bilelz.fr/owmap/?q='+$scope.city + &units=metric&appid='89b59e4d7d07894243b5acd24e7f18a3').success(fuction(data){
      $scope.meteo=data;
      }).error(function(data){
        $scope.errorMsg= "Hum.error...please retry.";
        });
    }
  }]);
