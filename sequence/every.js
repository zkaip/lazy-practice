var Lazy = require('lazy.js')

// alias: all, return: Boolean
var numbers = [1 , 2, 3, 4, 5]
var objects = [
  {foo: true},
  {foo: false, bar: true}
]

Lazy(numbers).every(isEven)     // => false
Lazy(numbers).every(isPositive) // => true
Lazy(objects).all('foo')        // => false
Lazy(objects).all('bar')        // => false