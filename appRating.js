var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser());

var restaurantes = [
	{id: 0, nome: "Moinho", precoMedio: "22.00", notaMedia: 8.7, endereco: "Rua itupava", especialidade: 'Massas'},
	{id: 1, nome: "Serra Azul", precoMedio: "20.00", notaMedia: 9.2, endereco: "Rua itupava", especialidade: 'Massas'},
	{id: 2, nome: "Dona Helena", precoMedio: "25.00", notaMedia: 2.3, endereco: "Rua itupava", especialidade: 'Massas'}
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

app.post('/restaurantes', function(req, res) {
  restaurantes.push(req.body);
  res.json(true);
});

// app.get('/operadoras', function(req, res) {
//   res.json(operadoras);
// });
