describe('webpack', function(){
  it('sees content', function(){
    var content  = require('../content.js');
    expect(content).toBe('It works from content.js');
  });

  it('sees the fun module', function(){
    var fun = require('../src/fun.js');
    expect(fun).toEqual(jasmine.any(Function));
  });
});