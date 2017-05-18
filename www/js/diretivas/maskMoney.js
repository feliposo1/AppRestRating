angular.module("starter").directive('maskmoney', function(){
	return {

		link: function(scope, element, attr) {

			$(element).maskMoney();

		}
	}
})
