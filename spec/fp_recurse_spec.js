require('./spec_helper');

let Factorial = {
  recursive(num){
    if (num == 0){
      return 1;
    }
    else{
      return num * this.recursive(num - 1);
    }
  },

  mapReduce(num){
    return Array.apply(null, Array(num)).reduce((x, y, z)=> { return x + x * z; }, 1);
  }
};

describe('Factorial', () => {

  describe('with recursion', () => {
    it('given 0 returns 1', () => {
      expect(Factorial.recursive(0)).toBe(1);
    });

    it('given 3 returns 6', () => {
      expect(Factorial.recursive(3)).toBe(6);
    });

    it('given 5 returns 120', () => {
      expect(Factorial.recursive(5)).toBe(120);
    });
  });

  describe('with map reduce', () => {
    it('given 0 returns 1', () => {
      expect(Factorial.mapReduce(0)).toBe(1);
    });

    it('given 3 returns 6', () => {
      expect(Factorial.mapReduce(3)).toBe(6);
    });

  })

});