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
	$rootScope.operationName = "";
	$rootScope.operationState = true;
	$rootScope.showOperationState = false;
});

ngApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/content.html',
        controller: 'ContentController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
