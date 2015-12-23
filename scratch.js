require('./spec_helper');

describe('Cursor', function(){

  var Cursor, subject, data, cells, callbackSpy;

  beforeEach(function(){
    Cursor = require('../src/cursor');
    cells = [{cell_id: 4}, {cell_id: 32}, {cell_id: 44}];
    data = {scaling: 'containers', cells, desiredLrps: []};
    callbackSpy = jasmine.createSpy('callback');
    subject = new Cursor(data, callbackSpy);
  });

  describe('#get', function(){
    it('returns the data at the specified key', function(){
      expect(subject.get('scaling')).toEqual('containers');
      expect(subject.get('cells', 0)).toEqual(cells[0]);
      expect(subject.get('cells', 0, 'cell_id')).toEqual(cells[0].cell_id);
    });
  });

  describe('#refine', function(){
    it('returns a new cursor that points to the given path', function(){
      var cursor = subject.refine('scaling');
      expect(cursor).toEqual(jasmine.any(Cursor));//same as expect(n).to be_a(Note)
      expect(cursor.get()).toEqual('containers');
    });

    it('can find objects in arrays', function(){
      expect(subject.refine('cells', cells[1]).get()).toBe(cells[1]);
    });

    it('works if the path is a single object', function(){
      expect(subject.refine('cells').refine(cells[1]).get()).toBe(cells[1]);
    });

    it('returns a cursor then updates in the expected way', function(){
      var cell = {cell_id: 'new'};
      subject.refine('cells').refine(cells[1]).set(cell);
      expect(callbackSpy).toHaveBeenCalled();

    })
  });

});