angular.module('starter').controller('detalhesCtrl', function($scope, $mdDialog, $stateParams, restApi){

  var carregaRest = function() {
    restApi.getId($stateParams.resId).success(function(value){
      $scope.dados = value;
    });

  }

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvancedNota = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './templates/modais/addNota.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      restApi.upRest('notaMedia', $scope.dados.id, answer.nota).success(function(value){
        carregaRest();
      });
    }, function() {
      console.log('erro');
    });
  };

  $scope.showAdvancedMedia = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './templates/modais/addGasto.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {

      restApi.upRest('precoMedio', $scope.dados.id, answer.gasto).success(function(value){
        carregaRest();
      });

    }, function() {
      console.log('erro');
    });
  };



  function DialogController($scope, $mdDialog) {
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }

  carregaRest();

  // $(function() {
  //   alert('oi');
  //   $('.valorGasto').maskMoney();
  // })

})
