//method change these methods to method chaining
//figured out that I need to make a class so that I can reuse the
//references for method chaining
require('./spec_helper');

describe('The Calculator Kata', () => {
  let subject;
  let Calculator = require ('../src/calculator');

  beforeEach(() => {
    subject = new Calculator('0');
  });

  describe('Calculator', () => {

    describe('add', () => {

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
    });

      describe('parseIntArray', () => {
        beforeEach(() => {
          subject = new Calculator('0');
        });

        it('given a string of numbers, returns and array of ints', () => {
          expect(subject.parseIntArray('1,2')).toEqual([1, 2])
        });

        it('given a string with one number, returns the number as an int', () => {
          expect(subject.parseIntArray('1')).toEqual([1]);
        });

        it('given an empty string returns 0', () => {
          expect(subject.parseIntArray('')).toEqual([0]);
        });
      });

      describe('RemoveNewLines', () => {
        beforeEach(() => {
          subject = new Calculator('0');
        });

        it('given a string containing newlines returns the string without them', () => {
          expect(subject.removeNewLine("1\n2,3")).toEqual("1,2,3");
        });

        it('given a string without a newline, returns the string unmutated', () => {
          expect(subject.removeNewLine('1,2,3')).toEqual("1,2,3");
        });
      });
  });
});
