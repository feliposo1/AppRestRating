angular.module('starter').controller('ratingCtrl', function($scope, $mdDialog, restApi){

  $scope.restaurantes = [];
  $scope.selecionado = "selecionado";
  $scope.message;

  var carregarRest = function() {
		restApi.getMethod().success(function(data,status){
			$scope.restaurantes = data;
		}).error(function(data, status){
			$scope.message = 'Erro ao carregar restaurantes, pedimos desculpa pelo transtorno';
		});
	};

  carregarRest();

  $scope.ordenarPor = function(campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}

  $scope.isRestSelecionado = function(restaurante) {

		return restaurante.some(function (rest) {
			return rest.selecionado;
		})

	}

  $scope.apagarRest = function(restaurantes) {

		$scope.restaurantes = restaurantes.filter(function(restaurante) {
			if (!restaurante.selecionado) return restaurante;
		})

	}

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };


  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './templates/modais/addRestaurante.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {

      var valoresAdicionais = {notaMedia : 0, precoMedio: 0};

      for(var chave in valoresAdicionais) {
        var valor = valoresAdicionais[chave];
        answer[chave] = valor;
      }

      restApi.saveRest(answer).success(function(data, status){
  			delete $scope.restaurantes;
  			carregarRest();
  		});
    }, function() {

    });
  };

  $scope.showAdvanced2 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './templates/modais/addGasto.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  $scope.showAdvanced3 = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: './templates/modais/addNota.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
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



})
