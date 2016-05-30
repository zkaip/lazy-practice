var Lazy = require('lazy.js')

// 除...之外的
Lazy([1, 2, 3, 4, 5]).without(2, 3)   // sequence: [1, 4, 5]
Lazy([1, 2, 3, 4, 5]).without([4, 5]) // sequence: [1, 2, 3]