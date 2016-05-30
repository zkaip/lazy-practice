var Lazy = require('lazy.js')

Lazy([1, 2, 3]).reverse() // sequence: [3, 2, 1]
Lazy([]).reverse()        // sequence: []