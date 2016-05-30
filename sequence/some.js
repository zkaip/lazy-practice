var Lazy = require('lazy.js')

var numbers = [1, 2, 3, 4, 5];

Lazy(numbers).some()           // => true
Lazy(numbers).some(isEven)     // => true
Lazy(numbers).some(isNegative) // => false
Lazy([]).some()                // => false