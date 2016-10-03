require('./spec_helper');


function isPalindrome(word){

  let isPalindrome = false;

  if(palindromeTest(word)){
    isPalindrome = true;
  }

  return isPalindrome;

}

function wordReverse(word){

  let backWord = '';
  let i = word.length;

  for (i; i >=0; i--){
    backWord = backWord + word[i];

  }
  console.log(backWord);

  //This is why we should really use array for this.
  return backWord.replace('undefined','');

}

function palindromeTest(word){

  //let wordArray = wordSplit(word);

  //return wordReverse(wordArray).join('') === word;
  return wordReverse(word) === word;
}

function wordSplit(word){
  return Array.from(Array(word.length)).map( (char, index) => { return word[index] })
}


describe('Palindrome', () => {

  it('returns true if a word is a palindrome', () => {
    expect(isPalindrome('deed')).toBe(true);
  });

  it('returns false if a word is not a palindrome', () => {
    expect(isPalindrome('pets')).toBe(false);
  });

  it('returns true if a phrase is a palindrome', () => {
    expect(isPalindrome('cats r stac')).toBe(true);
  });

  it('returns false if a phrase is not a palindrome', () => {
    expect(isPalindrome('cats r nerds')).toBe(false);
  });

  it('returns true for a word with odd number of chars', () => {
    expect(isPalindrome('abcba')).toBe(true);
  });

  describe('palindromeTest', () => {
    it('returns true for deed', () => {
      expect(isPalindrome('deed')).toBe(true);
    });

    describe('wordSplit', () => {
      it('splits a word into an array', () => {
        expect(wordSplit('deed')).toEqual(['d','e','e','d']);
      });

      it('splits a phrase into an array', () => {
        expect(wordSplit('cats r nerds')).toEqual(["c", "a", "t", "s", " ", "r", " ", "n", "e", "r", "d", "s"])
      });
    });

    describe('wordReverse', () => {
      it('reverses the contents of a string', () => {
        expect(wordReverse('cat')).toEqual('tac');
      });

    });

  });

});
