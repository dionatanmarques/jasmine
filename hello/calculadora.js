var Calculadora =  function(){};

Calculadora.prototype.somar = function(valor1, valor2){
	return valor1+valor2;
}

Calculadora.prototype.subtrair = function(valor1,valor2){
	return valor1-valor2;
}

Calculadora.prototype.multiplicar = function(valor1,valor2){
	return valor1*valor2;
}

Calculadora.prototype.dividir = function(valor1,valor2){
	return valor1/valor2;
}
