var Lazy = require('lazy.js')

Lazy([1, 3, 6, 9]).sortedIndex(3)                    // => 1
Lazy([1, 3, 6, 9]).sortedIndex(7)                    // => 3
Lazy([5, 10, 15, 20]).filter(isEven).sortedIndex(10) // => 0
Lazy([5, 10, 15, 20]).filter(isEven).sortedIndex(12) // => 1