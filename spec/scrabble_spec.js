//http://exercism.io/exercises/javascript/scrabble-score/readme

let Scrabble = require('../src/scrabble');

describe('Scrabble', () => {
  let subject;

  it('scores an empty word as zero', () => {
    subject = '';
    expect(Scrabble.score('')).toEqual(0);
  });

  it('scores a null as zero', ()=> {
    subject = null;

    expect(Scrabble.score(subject)).toEqual(0);
  });

  it('scores a very short word',() => {
    expect(Scrabble.score('a')).toEqual(1);
  });

  it('scores the word by the number of letters',() => {
    expect(Scrabble.score('street')).toEqual(6);
  });

  it('scores more complicated words with more',() => {
    expect(Scrabble.score('quirky')).toEqual(22);
  });

  xit('scores case insensitive words', () =>  {
    expect(score('MULTIBILLIONAIRE')).toEqual(20);
  });

  describe('has a group score', ()=> {
    describe('for group 8', () => {
      it('returns 10 for the letter z or q', () => {
        expect(Scrabble.groupEight('z')).toEqual(10);
        expect(Scrabble.groupEight('q')).toEqual(10);
      });

      it('adds 10 to the score for each z or q', ()=> {
        expect(Scrabble.groupEight('zq')).toEqual(20);
      });

      it('returns 10 for the word quirky', ()=> {
        expect(Scrabble.groupEight('quirky')).toEqual(10);
      });
    });

    describe('for group 1', ()=> {
      it('returns 1 for the A', ()=> {
        expect(Scrabble.groupAll('A')).toEqual(1);
      });

      it('returns 1 for R', ()=> {
        expect(Scrabble.groupAll('R')).toEqual(1);
      });

      it('returns 1 for I', ()=> {
        expect(Scrabble.groupAll('I')).toEqual(1);
      });

      it('returns 1 for U', ()=> {
        expect(Scrabble.groupAll('U')).toEqual(1);
      });

    });

    describe('for group 5', ()=> {
      it('returns 4 for F, H, V, W, Y', () => {
        expect(Scrabble.groupAll('Y')).toEqual(4);
      });


    });

    describe('for group 6', ()=> {
      it('returns 5 for k', ()=> {
        expect(Scrabble.groupSix('k')).toEqual(5);
      });

      it('returns 5 for K', ()=> {
        expect (Scrabble.groupSix('K')).toEqual(5);
      });

      it('returns 5 for quirky', ()=> {
        expect (Scrabble.groupSix('quirky')).toEqual(5);
      });
    });

    describe('for groupAll', ()=>{
      it('scores the word quirky across all groups',() => {
        expect(Scrabble.groupAll('quirky')).toEqual(22);
      });

      it('works with 2 letters 1 in group 5 and 1 not', ()=> {
        expect(Scrabble.groupAll('hey')).toEqual(9);
      });
    })
  });

});
