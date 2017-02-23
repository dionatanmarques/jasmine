describe('Hello :)', function() {

  var hello;

  beforeEach(function() {
    hello = new Hello();
  });

  it('says my name', function() {
    expect(hello.sayHi('Fabeni')).toEqual('my name is Fabeni and I\'m learning Jasmine!');
  });

});
