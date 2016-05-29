var Lazy = require('lazy.js')

Lazy.range(3)         // sequence: [0, 1, 2]
Lazy.range(1, 4)      // sequence: [1, 2, 3]
Lazy.range(2, 10, 2)  // sequence: [2, 4, 6, 8]
Lazy.range(5, 1, 2)   // sequence: []
Lazy.range(5, 15, -2) // sequence: []
Lazy.range(3, 10, 3)  // sequence: [3, 6, 9]
Lazy.range(5, 2)      // sequence: [5, 4, 3]
Lazy.range(7, 2, -2)  // sequence: [7, 5, 3]
Lazy.range(3, 5, 0)   // sequence: []