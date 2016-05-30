var Lazy = require('lazy.js')

// 重复连续
Lazy([]).consecutive(2)        // => sequence: []
Lazy([1]).consecutive(2)       // => sequence: []
Lazy([1, 2]).consecutive(2)    // => sequence: [[1, 2]]
Lazy([1, 2, 3]).consecutive(2) // => sequence: [[1, 2], [2, 3]]
Lazy([1, 2, 3]).consecutive(0) // => sequence: [[]]
Lazy([1, 2, 3]).consecutive(1) // => sequence: [[1], [2], [3]]