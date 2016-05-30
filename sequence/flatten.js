var Lazy = require('lazy.js')

Lazy([1, [2, 3], [4, [5]]]).flatten() // sequence: [1, 2, 3, 4, 5]
Lazy([1, Lazy([2, 3])]).flatten()     // sequence: [1, 2, 3]
