//controllers
var controllers = angular.module('controllers',[]);

//services
var services = angular.module('services',[]);

//filters
var filters = angular.module('filters',[]);

//directives
var directives = angular.module('directives',[]);

//interceptors
var interceptors = angular.module('interceptors',[]);

//application
var ngApp = angular.module('ngSeedApp',[
                                       'ngResource',
                                       'ngSanitize',
                                       'ngCookies',
                                       'ngRoute',
									   'ngAnimate',
									   'angular-gestures',
                                       'controllers',
                                       'services',
                                       'filters',
                                       'directives',
                                       'interceptors'
                                       ]);
									   
ngApp.factory('mainService', function(){
	return {
	};
});

ngApp.controller('mainController', function($rootScope, $scope, $route){
	$scope.angularready = true;
});

ngApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/hello.html',
        controller: 'HelloCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
