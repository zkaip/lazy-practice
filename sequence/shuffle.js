var Lazy = require('lazy.js')

// 随机序列相同元素的新的Sequence
Lazy([1, 2, 3, 4, 5]).shuffle().value() // =~ [1, 2, 3, 4, 5]
