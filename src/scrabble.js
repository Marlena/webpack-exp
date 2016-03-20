
let Scrabble = {
  scoreWord(word){

    if (word === null || word.length <= 0) return 0;

    return this.calculateScore(word);
  },

  calculateScore(word){
    let score = 0;

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

    scoreKeys.forEach((scoreKey)=>{
      let scoreList =  eval(`scoreMap[\'${scoreKey}\']`) + '';

      Array.from(word).map((character) =>{
        if (scoreList.includes(character) ||
            scoreList.toLowerCase().includes(character)){
          return score += parseInt(scoreKey);
        }
      });
    });

    return score;
  }

};

module.exports = Scrabble;
