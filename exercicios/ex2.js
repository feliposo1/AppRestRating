var objs = {
  string : {
    numS : 4,
    valS : 'aba,baba,aba,xzxb'
  },
  querys : {
    numS : 3, 
    valS : 'aba,xzxb,ab'
  }
};

var resul = [];

// valida se Quantidade == strings

function validaObjs(ocorrencia, string){
  
  var tArray = string.split(',');
  
  if (tArray.length != ocorrencia) return false;
  else return true;
    
}

var sArray = objs.string.valS.split(',');
var qArray = objs.querys.valS.split(',');

if(validaObjs(objs.string.numS, objs.string.valS) === false || validaObjs(objs.querys.numS, objs.querys.valS) === false) {console.log('Erro em ocorrencia e string')} else{

// dispersa array  
  
 for(var i = 0; i < objs.querys.numS; i++) {
  
  var ap = 0;
  
  sArray.forEach(function(val) {
    if(val == qArray[i]){
      ap = ap + 1;
    }
  })
  
  resul.push(ap);
}

}

console.log(resul);