require('./spec_helper');

describe('Given a todo list,', function(){

  var todo, Todo;
  var Cursor, subject, data, data2, cells, callbackSpy;

  data2 = {
    modal: null,
    page: 'compare',
    search: null,
    searchNew: null,
    existingDrugs: [],
    newDrug: null,
    sideEffects: null,
    errors: {
      existingDrugs: null,
      newDrug: null,
      sideEffects: null
    }
  };

  //I can see a todo list
  //I can see a todo
  //I can add a todo
  //I can edit a todo
  //I can remove a todo

  beforeEach(function(){
    Todo = require ('../src/todo');
    todo = new Todo();

    Cursor = require('pui-cursor');
    cells = [{cell_id: 4}, {cell_id: 32}, {cell_id: 44}];
    data = {scaling: 'containers', cells, desiredLrps: []};
    subject = new Cursor(data2);

  });

  it('updates cells', function(){
    expect(subject.get('existingDrugs')).toEqual([]);


  });

  it('is initially empty', function(){
    todo = new Todo();
    expect(todo.isEmpty()).toEqual(true);
  });

  it('contains 0 items', function(){
    expect(todo.length()).toEqual(0);
  });

  describe('when the todo list is initialized', function(){


    it('then it can add add a todo', function(){
      todo.add('take a nap');
      //expect(todo.length()).toEqual(1);
      //expect(todo.isEmpty()).toEqual(false);
    });
  });








});