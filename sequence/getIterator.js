var Lazy = require('lazy.js')

var iterator = Lazy([1, 2]).getIterator()

iterator.moveNext(); // => true
iterator.current();  // => 1
iterator.moveNext(); // => true
iterator.current();  // => 2
iterator.moveNext(); // => false
