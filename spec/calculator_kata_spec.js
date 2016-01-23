//refactor: make a class
//method change these methods to method chaining
//figured out that I need to make a class so that I can reuse the
//references for method chaining

const add = function(numString){

  let sum;

  const parsedString = removeNewLine(numString);
  const numArray = parseIntArray(parsedString);

  //destructuring
  const [addend] = numArray;

  if(numArray.length > 1){
    //arrow syntax
    sum = numArray.reduce((previous, current) => previous + current);
    return sum;
  }
  return (addend > 0) && addend || 0;
};

const parseIntArray = function (numString){

  if (numString === '') return [0];

  const intArray = [];
  const numStringArray = numString.split([',']);

  //arrow syntax
  numStringArray.forEach(num => intArray.push(parseInt(num)) );

  return intArray;
};

const removeNewLine = function (str) {
  let parsedStr = '';
  const regex = (/\n/);

  parsedStr = str.replace(regex, ',');

  return parsedStr;
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

    it('given a set of numbers, returns the sum', function(){
      expect(add('1,2,3,5,8')).toEqual(19);
    });

    it('given a newline in the set of numbers, returns the sum', function(){
      //“1\n2,3”  (will equal 6)
      expect(add("1\n2,3")).toEqual(6);
    });

    describe('parseIntArray', function(){
      it('given a string of numbers, returns and array of ints', function(){
        expect(parseIntArray('1,2')).toEqual([1, 2])
      });

      it('given a string with one number, returns the number as an int', function(){
        expect(parseIntArray('1')).toEqual([1]);
      });

      it('given an empty string returns 0', function(){
        expect(parseIntArray('')).toEqual([0]);
      });
    });

    describe('RemoveNewLines', function(){
      it('given a string containing newlines returns the string without them', function(){
        expect(removeNewLine("1\n2,3")).toEqual("1,2,3");
      });

      it('given a string without a newline, returns the string unmutated', function(){
        expect(removeNewLine('1,2,3')).toEqual("1,2,3");
      });
    });

  });
});
