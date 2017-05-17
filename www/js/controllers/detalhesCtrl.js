angular.module('starter').controller('detalhesCtrl', function($scope, $stateParams, restApi){

  restApi.getId($stateParams.resId).success(function(value){
    $scope.dados = value;
  });

  

})
