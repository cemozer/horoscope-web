services.factory('ContentService', function($q, $http, $resource){
	return {
		loadCurrentHoroscopeList : function(){
				
				var deferred = $q.defer();
				
				$http.get(REST_BASE+'getHoroscopeList.php')
					.success( function(param){
						if(!param.data){
							console.log("Error on getHoroscopeList: status:"+param.status+"; message:"+param.message);
							deferred.reject(null);
						}else{
							deferred.resolve(param.data);
						}
					})
					.error(function(err){
						console.log("Error on getHoroscopeList: status:"+param.status+"; message:"+param.message);
						deferred.reject(null);
					});
				
				return deferred.promise;
		},
		saveHoroscopeList : function(horoscopeData){

			var deferred = $q.defer();
				
				$http.post(REST_BASE+'updateHoroscopeList.php', horoscopeData)
					.success( function(param){
						if(param.status!="success"){
							console.log("Error on updateHoroscopeList: status:"+param.status+"; message:"+param.message);
							deferred.reject(false);
						}else{
							deferred.resolve(true);
						}
					})
					.error(function(err){
						console.log("Error on updateHoroscopeList: status:"+param.status+"; message:"+param.message);
						deferred.reject(false);
					});
				
				return deferred.promise;
		},
		push2Mobile : function(){
			
		}
	};
});