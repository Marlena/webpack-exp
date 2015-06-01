require('./spec_helper');

describe('webpack', function(){
  var fun;

  beforeEach(function(){
    fun = require('../src/fun.js')
  });

  it('sees content', function(){
    var content  = require('../content.js');
    expect(content).toBe('It works from content.js');
  });

  it('sees the fun module', function(){
    expect(fun).toEqual(jasmine.any(Function));
  });

  it('fun is defined', function(){
    expect(fun).toBeDefined();
  });

});

describe ('ES6', function(){

  it ('can assign through destructuring', function(){
    var o = {p: 42, q: true};
    var {p, q} = o;
    expect(p).toEqual(42);
    expect(q).toEqual(true);
  })
});