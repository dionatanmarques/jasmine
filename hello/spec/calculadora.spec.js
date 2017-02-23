describe('Calculadora :)', function() {

  var calculadora;

  beforeEach(function() {
    calculadora = new Calculadora();
  });

  it('Teste Metodo Somar', function() {
    expect(calculadora.somar(2,1)).toEqual(3);
  });

  it('Teste Metodo Subtrair', function() {
    expect(calculadora.subtrair(2,1)).toEqual(1);
  });

  it('Teste Metodo Multiplicar', function() {
    expect(calculadora.multiplicar(2,3)).toEqual(6);
  });

  it('Teste Metodo Dividir', function() {
    expect(calculadora.dividir(6,2)).toEqual(3);
  });

});
