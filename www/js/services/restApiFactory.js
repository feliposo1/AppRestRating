angular.module('starter').factory('restApi', function($http, config) {

	var _getMethod = function(){
		return $http.get(config.baseUrl + "/restaurantes");
	};

	var _saveRest = function(elemento){
		return $http.post(config.baseUrl + "/restaurantes", elemento);
	}

  var _getId = function (id) {
		// PHP: $http.get(config.baseUrl + "/contatosBackend.php?id=" + id)
		return $http.get(config.baseUrl + "/restaurantes/" + id);
	};

	return {
		getMethod : _getMethod,
		saveRest : _saveRest,
    getId : _getId
	};

})
