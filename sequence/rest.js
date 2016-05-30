var Lazy = require('lazy.js')

// aliases: skip tail rest
Lazy([1, 2, 3, 4]).rest()  // sequence: [2, 3, 4]
Lazy([1, 2, 3, 4]).rest(0) // sequence: [1, 2, 3, 4]
Lazy([1, 2, 3, 4]).rest(2) // sequence: [3, 4]
Lazy([1, 2, 3, 4]).rest(5) // sequence: []