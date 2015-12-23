
describe('some immutable javascript functions are', function(){

  describe('filter', function(){
    it('removes brown M&M\'s', function(){

      var brownOnes = function(mandm){
        return mandm !== 'brown';
      };

      var noBrownOnes = ['green', 'blue', 'brown', 'yellow'].filter(brownOnes);

      expect(noBrownOnes).toEqual(['green', 'blue', 'yellow']);

    });
  });

});