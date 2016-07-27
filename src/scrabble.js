
let Scrabble = {
  scoreWord(word){

    if (word === null || word.length <= 0) return 0;

    return this.calculateScore(word);
  },

  calculateScore(word){
    let wordScore = 0;

    const scoreMap = {
      1:'A, E, I, O, U, L, N, R, S, T',
      2:'D, G',
      3:'B, C, M, P',
      4:'F, H, V, W, Y',
      5:'K',
      8:'J, X',
      10:'Z,Q'
    };

    let scoreKeys = Object.keys(scoreMap);

      Array.from(word).map((character) =>{

        scoreKeys.forEach((scoreKey)=>{
          let scoreList =  eval(`scoreMap[\'${scoreKey}\']`) + '';
          
          if (scoreList.toUpperCase().includes(character) || scoreList.toLowerCase().includes(character)){
          return wordScore += this.scoreCharacter(character, scoreList, scoreKey);
          }
      });
    });

    return wordScore;
  },

  scoreCharacter(character, scoreList, scoreKey){

    if (scoreList.toUpperCase().includes(character) ||
        scoreList.toLowerCase().includes(character)){
      return parseInt(scoreKey);
    }
    else{
      return 0;
    }

  }

};

module.exports = Scrabble;
