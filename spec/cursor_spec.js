require('./spec_helper');

describe('Given a cursor', function(){


  var data, Cursor, subject;

  beforeEach(function(){

    data = {
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

    Cursor = require('pui-cursor');

    subject = new Cursor(data);
  });

  /*it('can get some data', function(){
    expect(subject.get('page')).toEqual('compare');
  });

  context('blah blah', function(){

  });*/

  //it('can update the cursor', function(){
  //
  //  subject.refine('page').set('existing');
  //  expect(subject.get('page')).toEqual('existing');
  //});
});