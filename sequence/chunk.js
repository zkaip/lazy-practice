var Lazy = require('lazy.js')

Lazy([]).chunk(2)        // sequence: []
Lazy([1, 2, 3]).chunk(2) // sequence: [[1, 2], [3]]
Lazy([1, 2, 3]).chunk(1) // sequence: [[1], [2], [3]]
Lazy([1, 2, 3]).chunk(4) // sequence: [[1, 2, 3]]
Lazy([1, 2, 3]).chunk(0) // throws