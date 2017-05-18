angular.module('starter').filter('addponto', function(){

	return function(input) {

    var string = input;
    var metade = Math.floor(string.length / 2);
    var resultado = string.substr(0,1)+"."+string.substr(metade);

		return resultado;

	}

})
