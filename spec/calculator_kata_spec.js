//method change these methods to method chaining
//figured out that I need to make a class so that I can reuse the
//references for method chaining
require('./spec_helper');

describe('In the Calculator Kata', () => {
  let subject;
  let Calculator = require ('../src/calculator');

  beforeEach(() => {
    subject = Calculator;
  });

  describe('the Calculator', () => {

    describe('method add', () => {

      it('given no numbers returns 0', () => {
        expect(subject.add('')).toEqual(0);
      });

      it('given 1 number returns the sum', () => {
        expect(subject.add('1')).toEqual(1);
      });

      it('given 2 numbers returns the sum', () => {
        expect(subject.add('1,2')).toEqual(3);
      });

      it('given a set of numbers, returns the sum', () => {
        expect(subject.add('1,2,3,5,8')).toEqual(19);
      });

      it('given a newline in the set of numbers, returns the sum', () => {
        //“1\n2,3”  (will equal 6)
        expect(subject.add("1\n2,3")).toEqual(6);
      });

      it('allows the user to specify a delimiter on the first line', () => {
        expect(subject.add("//;\n1;2")).toEqual(3);
      })
    });

    describe('method delimiter', () => {

      it('returns the delimiter', () => {
        expect(subject.delimiter("//;\n1;2")).toEqual(';');
      });

      it('returns the string if there is no delimiter', () => {
        expect(subject.delimiter("1,2")).toEqual('1,2');
      });

      describe('method delimiterRegEx', () => {
        it('returns true if a string begins with two forward slashes', () => {
          expect(subject.delimiterRegEx("//;\n1;2")).toEqual(true);
        });
      });
    });

    describe(' method buildIntArray', () => {
      it('returns an array of ints', () => {
        expect(subject.buildIntArray("//;\n1;2")).toEqual([1, 2]);
      });
    });

    describe(' method extractList', () => {
      it('returns a list', () => {
        expect(subject.extractList("//;\n1;2")).toEqual('1;2');
      });

      it('returns a list if given a list', () => {
        expect(subject.extractList("1,2")).toEqual('1,2');
      });
    });

  });
});
