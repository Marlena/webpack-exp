var subject = 'Lourdes';

var greeting = function(name){

  //what if there were two functions, first name and last name.
  //if there is only 1 name, last name returns empty.

  return salutation(name) + names(name);

};

var salutation = function(name){

  var salutation = 'Hello ';
  //look for at least two uppercase letters in a word
  var regex = /\b([A-Z]{2,})\b/g;

  return (regex.test(name) && salutation.toUpperCase()) || salutation;

};

var names = function(name){
  if (!name) return 'friend';

  if (name[0].length > 1){
    return name[0] + ' and ' + name[1];
  }

  return name;
};

describe('Greeting', function(){

  it('given a name returns hello name', function(){
    expect(greeting(subject)).toEqual('Hello Lourdes');
  });

  it('when not given a name returns a hello friend', function(){
    expect(greeting()).toEqual('Hello friend');
  });

  it('given ALYSSA returns HELLO ALYSSA', function(){
    expect(greeting('ALYSSA')).toEqual('HELLO ALYSSA');
  });

  it('given two names, return Hello Name1 and Name2', function(){
    expect(greeting(['Trish', 'Jessica'])).toEqual('Hello Trish and Jessica');
  });

  describe('salutation', function(){

    it('given a capitalized name returns Hello', function(){
      expect(salutation('Alyssa')).toEqual('Hello ')
    });

    it('given no name returns Hello', function(){
      expect(salutation()).toEqual('Hello ');
    });

    it('given an all caps name returns HELLO', function(){
      expect(salutation('ALYSSA')).toEqual('HELLO ');
    });

  });

  describe('names', function(){

    var name;

    it('returns a name', function(){
      expect(names('Anna')).toEqual('Anna');
    });

    it('returns friend if name is empty', function(){
      name = null;

      expect(names(name)).toEqual('friend');
    });

    it('Given 2 names, returns Name1 and Name2', function(){
      name = ['Trish', 'Jessica'];

      expect(names(name)).toEqual('Trish and Jessica');
    });
  });

});
