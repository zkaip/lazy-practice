var Lazy = require('lazy.js')

function multiply(x, y) { return x * y; }

var numbers = [1, 2, 3, 4];

// aliases: inject foldl
Lazy(numbers).reduce(multiply)    // => 24
Lazy(numbers).reduce(multiply, 5) // => 120