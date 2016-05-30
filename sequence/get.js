var Lazy = require('lazy.js')

Lazy([1, [2, 3], [4, [5]]]).flatten().get(1) // 2
