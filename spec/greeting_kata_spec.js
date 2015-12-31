var subject = 'Lourdes';

var greeting = function(name){

  return salutation(name) + names(name);

};

var salutation = function(name){

  var salutation = 'Hello ';

  if (isArray(name)){
    salutation = 'Hello, ';
  }

  //look for at least two uppercase letters in a word
  var regex = /\b([A-Z]{2,})\b/g;

  return (regex.test(name) && salutation.toUpperCase()) || salutation;

};

var names = function(name){

  //what if there were two functions, first name and last name.
  //if there is only 1 name, last name returns empty.
  if (!name) return 'friend';

  if (isArray(name)){
    var firstNameSet = name.slice(0, name.length-1).join([', ']);
    return firstNameSet + andPhrase(name) + name[name.length-1];
    }

  return name;
};

var isArray = function(object){
  return (Object.prototype.toString.call( object ) === '[object Array]') && true || false;
};

var andPhrase = function(names){
  return (names.length === 2) && ' and ' || ', and ';
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

  it('given two names, return Hello, Name1 and Name2', function(){
    expect(greeting(['Trish', 'Jessica'])).toEqual('Hello, Trish and Jessica');
  });

  it('given a list of names returns Hello, Name1, Name2 and Name3', function(){
    expect(greeting(['Hui', 'Ray', 'Annika'])).toEqual('Hello, Hui, Ray, and Annika');
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

  describe('isArray', function(){
    var subject;
    it('returns true if object is array', function(){
      subject = ['orange'];
      expect(isArray(subject)).toEqual(true);
    });
    it('returns false if object is a string', function(){
      subject = 'orange';
      expect(isArray(subject)).toEqual(false);
    });

    describe('andPhrase', function(){
      it("given an array with two names, returns and", function(){
        subject = ['Erica', 'Tracy'];
        expect(andPhrase(subject)).toEqual(' and ');
      });

      it("given an array with more than two names, returns and with oxford comma ", function(){
        subject = ['Jay', 'Deb', 'Sameer'];
        expect(andPhrase(subject)).toEqual(', and ');
      });
    });
  });
});

