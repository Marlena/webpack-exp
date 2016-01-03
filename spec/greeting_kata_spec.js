var greeting = function(name){

  name = flattenNames(name);

  if (isAllCaps(name) && isArray(name) && name.length > 1){
    return salutation(capitalizedNames(name)) + names(capitalizedNames(name)) + allCapsGreeting(name);
  }
  return salutation(name) + names(name) + '.';

};

var allCapsGreeting = function(names){
  return '.  AND HELLO ' + allCapsNames(names).join(',') + '!';
};

var allCapsNames = function(names){
  return  names.filter(function(name) {
    return isAllCaps(name)
  });
};

var capitalizedNames = function(names){
  return names.filter(function(name) {
    return !isAllCaps(name)
  });
};

var salutation = function(name){
  var salutation = 'Hello ';

  if (isArray(name)){
    salutation = 'Hello, ';
  }
  return (isAllCaps(name) && salutation.toUpperCase()) || salutation;

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

var isAllCaps = function(names){
  //look for at least two uppercase letters in a word
  var regex = /\b([A-Z]{2,})\b/;
  return regex.test(names);
};

var flattenNames = function(names){

  if (isArray(names) && names.length >= 1) {
    var flattenedNames = [];
    var regex = /\s*,\s*/; //look for a comma with 0 or more spaces after it

    flattenedNames = names.reduce(function(a,b) {
      return a.concat(b.split(regex));}, []);

    return flattenedNames;
  }
  else return names;
};

describe('Greeting', function(){
  var subject;

  it('given a name returns hello name', function(){
    subject = 'Lourdes';
    expect(greeting(subject)).toEqual('Hello Lourdes.');
  });

  it('when not given a name returns a hello friend', function(){
    expect(greeting()).toEqual('Hello friend.');
  });

  it('given ALYSSA returns HELLO ALYSSA', function(){
    expect(greeting('ALYSSA')).toEqual('HELLO ALYSSA.');
  });

  it('given two names, return Hello, Name1 and Name2', function(){
    expect(greeting(['Trish', 'Jessica'])).toEqual('Hello, Trish and Jessica.');
  });

  it('given a list of names returns Hello, Name1, Name2 and Name3', function(){
    expect(greeting(['Hui', 'Ray', 'Annika'])).toEqual('Hello, Hui, Ray, and Annika.');
  });

  describe('when normal and shouted names are mixed', function(){
    it('then returns the shouted name at the end of the greeting', function(){
      expect(greeting(['Bella', 'EDWARD', 'Jacob'])).toEqual('Hello, Bella and Jacob.  AND HELLO EDWARD!');
    });
  });

  describe("given a name entry with a string containing a comma ", function(){
    it('returns a greeting with one set of names', function(){
      expect(greeting(["Lourdes", "Charlie, Dianne"])).toEqual('Hello, Lourdes, Charlie, and Dianne.');
    });

    describe('flattenNames', function(){
      beforeEach(function(){
        subject = ["Lourdes", "Charlie, Dianne"];
      });

      it('returns one array containing all names', function(){
        expect(flattenNames(subject)).toEqual(['Lourdes', 'Charlie', 'Dianne']);
      });

      it('returns the original name if there is nothing to expand', function(){
        subject = ['Lourdes', 'Charlie', 'Dianne'];
        expect(flattenNames(subject)).toEqual(['Lourdes', 'Charlie', 'Dianne']);
      });

      it('returns one name if only name is passed in', function(){
        expect(flattenNames('Alyssa')).toEqual('Alyssa');
      });

      it('given an empty string returns an empty string', function(){
        expect(flattenNames('')).toEqual('');
      });

    });

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

  describe('Given a name in all caps in a list', function(){

    beforeEach(function(){
      subject = ['MEI', 'Moshe'];
    });

    it('an all caps greeting is returned', function(){
      expect(allCapsGreeting(subject)).toEqual('.  AND HELLO MEI!');
    });

    it('is removed from the other names list', function(){
      expect(capitalizedNames(subject)).toEqual(['Moshe']);
    });

    describe('allCapsNames', function(){
      it('given a list returns a list of names in all caps', function(){
        expect(allCapsNames(subject)).toEqual(['MEI']);
      });
    });
  });

  describe('isAllCaps', function(){
    it('returns true given a word in all caps', function(){
      subject = 'DOT';
      expect(isAllCaps(subject)).toEqual(true);
    });

    it('returns true given an array containing a word in all caps', function(){
      subject = ['Serena','DOT'];
      expect(isAllCaps(subject)).toEqual(true);
    });
  });

});

