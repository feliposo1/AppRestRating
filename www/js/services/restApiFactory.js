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

	var _delId = function (id) {
		// PHP: $http.get(config.baseUrl + "/contatosBackend.php?id=" + id)
		return $http.delete(config.baseUrl + "/restaurantes/" + id);
	};

	var _upRest = function(metodo, id, valor){

		var params = {metodoUp : metodo, idUp : id, valorUp: valor};

		return $http.put(config.baseUrl + "/restaurantes", params);
	}

	return {
		getMethod : _getMethod,
		saveRest : _saveRest,
    getId : _getId,
		delId : _delId,
		upRest : _upRest
	};

})
