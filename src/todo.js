var Cursor = require ('pui-cursor');

var $data;

var Todo = function(){
  var items = [];
  $data = new Cursor({items:items});

};

Todo.prototype.isEmpty = function (){
  return true;
};

Todo.prototype.length = function(){
  return $data.get('items').length;
};

Todo.prototype.add = function(description){
  var item = {description: 'take a nap'};
  $data.refine('items').push(item);
};

module.exports = Todo;