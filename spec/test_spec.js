describe('webpack', function(){
  it('sees content', function(){

    var content  = require('../content.js');
    expect(content).toBe('It works from content.js');
  })
});