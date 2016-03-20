//http://exercism.io/exercises/javascript/scrabble-score/readme

let Scrabble = require('../src/scrabble');

describe('Scrabble', () => {
  let subject;

  it('scores an empty word as zero', () => {
    subject = '';
    expect(Scrabble.scoreWord('')).toEqual(0);
  });

  it('scores a null as zero', ()=> {
    subject = null;

    expect(Scrabble.scoreWord(subject)).toEqual(0);
  });

  it('scores a very short word',() => {
    expect(Scrabble.scoreWord('a')).toEqual(1);
  });

  it('scores the word by the number of letters',() => {
    expect(Scrabble.scoreWord('street')).toEqual(6);
  });

  it('scores more complicated words with more',() => {
    expect(Scrabble.scoreWord('quirky')).toEqual(22);
  });

  xit('scores case insensitive words', () =>  {
    expect(score('MULTIBILLIONAIRE')).toEqual(20);
  });


    describe('for calculateScore', ()=>{
      it('scores the word quirky across all groups',() => {
        expect(Scrabble.calculateScore('quirky')).toEqual(22);
      });

      it('works with 2 letters 1 in group 5 and 1 not', ()=> {
        expect(Scrabble.calculateScore('hey')).toEqual(9);
      });

      it('returns 5 for k', ()=> {
        expect(Scrabble.calculateScore('k')).toEqual(5);
      });

      it('returns 5 for K', ()=> {
        expect (Scrabble.calculateScore('K')).toEqual(5);
      });

      it('returns 4 for F, H, V, W, Y', () => {
        expect(Scrabble.calculateScore('Y')).toEqual(4);
      });

      it('returns 1 for the A', ()=> {
        expect(Scrabble.calculateScore('A')).toEqual(1);
      });

      it('returns 1 for R', ()=> {
        expect(Scrabble.calculateScore('R')).toEqual(1);
      });

      it('returns 1 for I', ()=> {
        expect(Scrabble.calculateScore('I')).toEqual(1);
      });

      it('returns 1 for U', ()=> {
        expect(Scrabble.calculateScore('U')).toEqual(1);
      });

      it('returns 10 for the letter z or q', () => {
        expect(Scrabble.calculateScore('z')).toEqual(10);
        expect(Scrabble.calculateScore('q')).toEqual(10);
      });

      it('adds 10 to the scoreWord for each z or q', ()=> {
        expect(Scrabble.calculateScore('zq')).toEqual(20);
      });
    });

});
