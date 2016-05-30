var Lazy = require('lazy.js')

var numbers = [1, 2, 3, 4, 5]

// aliase: skipWhile  
Lazy(numbers).dropWhile(function (x) {
  return x > 3
})
