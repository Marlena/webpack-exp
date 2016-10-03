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

  var fruits, more_fruits;

  beforeEach(function(){
    fruits = ['apple', 'banana', 'orange'];
    more_fruits = ['kiwi', 'strawberry', 'grapes'];
  });

  describe('destructuring', function() {
    it('can assign through destructuring', function() {
      var o = {p: 42, q: true};
      var {p, q} = o;
      expect(p).toEqual(42);
      expect(q).toEqual(true);
    });



  });


  describe('the spread operator', function(){

    it('can be used with push',function(){
      fruits.push(...more_fruits);
      expect(fruits.length).toEqual(6);
    });

  });

  describe('fat arrow', function(){
    it ('can be used with map', function(){

      var fruitTree = fruits.map( str => str + 'tree');
      expect(fruitTree).toEqual(['appletree', 'bananatree', 'orangetree']);

    });

  });


});