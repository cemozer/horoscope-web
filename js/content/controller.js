controllers.controller('ContentController', function($rootScope, $scope, ContentService){
	//object
	//id
	//name
	//text
	$scope.horoscopeList;
	
	$scope.init = function(){
		var promise = ContentService.loadCurrentHoroscopeList();
		promise.then(
				function(data){
					$scope.horoscopeList = data;
				},
				function(data){
					$scope.horoscopeList = data;
				});
	}
	
	$scope.saveHoroscopeList = function(){
		$rootScope.operationName = "Save horoscope list";
		$rootScope.showOperationState = true;

		ContentService.saveHoroscopeList($scope.horoscopeList);
		
		var promise = ContentService.loadCurrentHoroscopeList();
		promise.then(
				function(data){
					if(data){
						$rootScope.operationState = true;
					}
				},
				function(data){
					if(!data){
						$rootScope.operationState = false;
					}
				});
	}
	
	$scope.push2Mobile = function(){
		$rootScope.operationName = "Push horoscope list";
		$rootScope.showOperationState = true;
		$rootScope.operationState = true;
		ContentService.push2Mobile();
	}
	
	$scope.init();
});