var add = function(numString){

  var numArray = parseIntArray(numString);

  if (numArray === 0) return 0;

  //destructuring
  var [addend, augend] = numArray;

  if(numArray.length > 1){
    return augend + addend;
  }
  return (addend > 0) && addend || 0;
};

var parseIntArray = function (numString){

  if (numString === '') return 0;

  var intArray = [];
  var numStringArray = numString.split([',']);

  //arrow syntax
  numStringArray.forEach( num => intArray.push(parseInt(num)) );

  return intArray;
};

describe('The Calculator Kata', function(){

  describe('add', function(){

    it('given no numbers returns 0', function(){
      expect(add('')).toEqual(0);
    });

    it('given 1 number returns the sum', function(){
      expect(add('1')).toEqual(1);
    });

    it('given 2 numbers returns the sum', function(){
      expect(add('1,2')).toEqual(3);
    });

    describe('parseIntArray', function(){
      it('given a string of numbers, returns and array of ints', function(){
        expect(parseIntArray('1,2')).toEqual([1, 2])
      });

      it('given a string with one number, returns the number as an int', function(){
        expect(parseIntArray('1')).toEqual([1]);
      });

      it('given an empty string returns 0', function(){
        expect(parseIntArray('')).toEqual(0);
      })
    });

  });
});
