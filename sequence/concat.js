var Lazy = require('lazy.js')

var left = [1, 2, 3]
var right = [4, 5, 6]

Lazy(left).concat(right)         // sequence: [1, 2, 3, 4, 5, 6]
Lazy(left).concat(Lazy(right))   // sequence: [1, 2, 3, 4, 5, 6]
Lazy(left).concat(right, [7, 8]) // sequence: [1, 2, 3, 4, 5, 6, 7, 8]