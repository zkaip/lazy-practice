var Lazy = require('lazy.js')

Lazy([1, 2, 3]).last()                 // => 3
Lazy([1, 2, 3]).last(2)                // sequence: [2, 3]
Lazy([1, 2, 3]).filter(isEven).last(2) // sequence: [2]