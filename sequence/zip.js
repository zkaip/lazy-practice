var Lazy = require('lazy.js')

// 数组分别打包
Lazy([1, 2]).zip([3, 4]) // sequence: [[1, 3], [2, 4]]