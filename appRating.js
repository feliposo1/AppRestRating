var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static(__dirname + '/www'));
app.use(bodyParser());

var restaurantes = [
	{nome: "Moinho", precoMedio: "22.00", notaMedia: 8.7, endereço: "Rua itupava", especialidade: 'Massas'},
	{nome: "Serra Azul", precoMedio: "20.00", notaMedia: 9.2, endereço: "Rua itupava", especialidade: 'Massas'},
	{nome: "Dona Helena", precoMedio: "25.00", notaMedia: 2.3, endereço: "Rua itupava", especialidade: 'Massas'}
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

app.post('/restaurantes', function(req, res) {
  restaurantes.push(req.body);
  res.json(true);
});

// app.get('/operadoras', function(req, res) {
//   res.json(operadoras);
// });
