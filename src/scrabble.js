
let Scrabble = {
  scoreWord(word){

    if (word === null || word.length <= 0) return 0;

    return this.calculateScore(word);
  },

  calculateScore(word){
    let score = 0;

    const scoreMap = {
      1:'A, E, I, O, U, L, N, R, S, T, a, e, i, o, u, l, n, r, s, t',
      4:'F, H, V, W, Y, f, h, v, w, y',
      5:'K, k',
      10: 'Z,z,Q,q'
    };

    let scoreKeys = Object.keys(scoreMap);

    scoreKeys.forEach((scoreKey)=>{
      let scoreList =  eval(`scoreMap[\'${scoreKey}\']`) + '';

      Array.from(word).map((character) =>{
        if (scoreList.includes(character)){
          return score += parseInt(scoreKey);
        }

      });
    });

    return score;
  }

};

module.exports = Scrabble;
