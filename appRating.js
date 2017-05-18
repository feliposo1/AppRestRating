var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser());

var restaurantes = [
	{id: 0, nome: "Moinho", precoMedio: "22", notaMedia: "87", endereco: "Rua itupava", especialidade: 'Massas'},
	{id: 1, nome: "Serra Azul", precoMedio: "20", notaMedia: "92", endereco: "Rua itupava", especialidade: 'Massas'},
	{id: 2, nome: "Dona Helena", precoMedio: "25", notaMedia: "23", endereco: "Rua itupava", especialidade: 'Massas'}
];

var porta = 3412;

app.listen(process.env.PORT || porta, function(){
	console.log('Servidor online porta ' + porta);
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/restaurantes', function(req, res) {
  res.json(restaurantes);
});

app.get('/restaurantes/:id', function(req, res) {
	var id = req.params.id;

	for (var i = 0; i < restaurantes.length; i++) {
		if (restaurantes[i].id === parseInt(id)) {
				var peg = restaurantes[i];
		}
	}

	if (typeof peg == "undefined") {
		res.json('nop');
	}else{
		res.json(peg);
	}

});

app.delete('/restaurantes/:id', function(req, res){

	var idRes = req.params.id;

	for (var i = 0; i < restaurantes.length; i++) {
		if (restaurantes[i].id == idRes) {
				restaurantes.splice(i, 1);
		}
	}

	res.json(restaurantes);

});

app.put('/restaurantes', function(req, res){

	var objs = req.body;

	if (objs.metodoUp == 'precoMedio') {

		for (var i = 0; i < restaurantes.length; i++) {
			if (restaurantes[i].id == objs.idUp) {

				var precoAtual = restaurantes[i].precoMedio.replace(/[^0-9]+/g, '');
				var acresPreco = objs.valorUp.replace(/[^0-9]+/g, '');

				if (precoAtual != 0) {
				var media = (parseInt(precoAtual) + parseInt(acresPreco)) / 2;
			}else{
				var media = acresPreco;
			}
				restaurantes[i].precoMedio = media.toString().split('.')[0];

			}
		}
	}

		if (objs.metodoUp == 'notaMedia') {

			for (var i = 0; i < restaurantes.length; i++) {

				if (restaurantes[i].id == objs.idUp) {

					if (objs.valorUp == 10) {
						objs.valorUp = 100;
					}

					var notaAtual = restaurantes[i].notaMedia.replace(/[^0-9]+/g, '');
					var acresNota = objs.valorUp.toString().replace(/[^0-9]+/g, '');

					if (notaAtual != 0) {
						var media = (parseInt(notaAtual) + parseInt(acresNota)) / 2;
					}else{
						var media = acresNota;
					}

					restaurantes[i].notaMedia = media.toString().split('.')[0];

				}
			}
		}

		res.json(restaurantes);


	// if (objs.metodoUp == 'notaMedia') {
	//
	// }

});

app.post('/restaurantes', function(req, res) {
	var objs = req.body;

	for (var i = 0; i < restaurantes.length; i++) {

		if (restaurantes[i].id > 0) {

			if (restaurantes[i].id > restaurantes[i-1].id) {
					var idM = restaurantes[i].id;
			}

		}

	}

	if (typeof idM != "undefined") {
		objs.id = idM + 1;
	}else{
		objs.id = 0;
	}

  restaurantes.push(objs);
  res.json(true);
});

// app.get('/operadoras', function(req, res) {
//   res.json(operadoras);
// });
