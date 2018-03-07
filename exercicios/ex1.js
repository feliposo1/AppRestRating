var numTeste = 100;

var resul = [];

function verMult(num) {
  if(num % 5 == 0 && num % 3 == 0) return "Fizz Buzz"
  else if(num % 5 == 0) return "Buzz";
  else if(num % 3 == 0) return "Fizz";
  else return num;
}

if(numTeste > 0) {
  for(var i = 0; i <= numTeste; i++){
    resul.push(verMult(i));
  }
}

console.log(resul);