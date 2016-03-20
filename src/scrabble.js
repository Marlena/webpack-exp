
let Scrabble = {
  score(word){

    if (word === null || word.length <= 0) return 0;


    let score = this.groupFive(word);
    score += this.groupOne(word);
    score += this.groupSix(word);
    score += this.groupEight(word);


    return score;
  },

  groupEight(word){

    let score = 0;

    Array.from(word).map((character)=>{
      if (character.includes('z') || character.includes('q')){
        return score += 10;
      }
    });

    return score;
  },

  groupSix(word){
    let score = 0;

    Array.from(word).map((character)=>{
      if (character.includes('k') || character.includes('K')){
        return score += 5;
      }
    });

    return score;
  },

  groupFive(word){
    let score = 0;
    const scoreMap = {4:'F, H, V, W, Y, f, h, v, w, y'};

    let scoreKey = Object.keys(scoreMap)[0];


    let scoreList =  eval(`scoreMap[\'${scoreKey}\']`) + '';

    Array.from(word).map((character) =>{
      if (scoreList.includes(character)){
        return score += parseInt(scoreKey);
      }

    });

    return score;
  },

  groupOne(word){
    let score = 0;

    const scoreMap = {1:'A, E, I, O, U, L, N, R, S, T, a, e, i, o, u, l, n, r, s, t'};

    let scoreKey = Object.keys(scoreMap)[0];


    let scoreList =  eval(`scoreMap[\'${scoreKey}\']`) + '';

    Array.from(word).map((character) =>{
      if (scoreList.includes(character)){
        return score += parseInt(scoreKey);
      }

    });

    return score;
  },

  groupAll(word){
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
