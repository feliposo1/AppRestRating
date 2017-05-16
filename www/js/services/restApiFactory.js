angular.module('starter').factory('restApi', function($http, config) {

	var _getMethod = function(){
		return $http.get(config.baseUrl + "/restaurantes");
	};

	var _saveRest = function(elemento){
		return $http.post(config.baseUrl + "/restaurantes", elemento);
	}

	return {
		getMethod : _getMethod,
		saveRest : _saveRest
	};

})
