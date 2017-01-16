meteoApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider.when('/home',{
      controller:'MainController', templateUrl:'html/home.html'
    })
    .otherwise({
        redirectTo:'/home'    
    });
  }]);
