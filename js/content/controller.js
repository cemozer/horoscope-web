controllers.controller('ContentController', function($rootScope, $scope, ContentService){
	//object
	//id
	//name
	//text
	$scope.horoscopeList;
	
	$scope.init = function(){
//		$scope.horoscopeList = ContentService.loadCurrentHoroscopeList();
		$scope.horoscopeList = [{'id':1,
								 'name':'Aslan',
								 'text':'Lorem ipsum for aslan'},
								 {'id':2,
								  'name':'Baþak',
								  'text':'Lorem ipsum for baþak'}];
	}
	
	$scope.saveHoroscopeList = function(){
		$rootScope.operationName = "Save horoscope list";
		$rootScope.showOperationState = true;
		$rootScope.operationState = true;
//		ContentService.saveHoroscopeList($scope.horoscopeList);
	}
	
	$scope.push2Mobile = function(){
		$rootScope.operationName = "Push horoscope list";
		$rootScope.showOperationState = true;
		$rootScope.operationState = true;
//		ContentService.push2Mobile();
	}
	
	$scope.init();
});